<template lang="pug">
div.top-container
  el-dialog(title="" :visible.sync="itemPickerDialogVisible" fullscreen)
    div.item-picker-container
      div.filters
        div.filter
          el-select(v-if="itemPickerShowSort" v-model="itemPickerSort" :placeholder="$t('ソート')" filterable clearable)
            el-option(v-for="item of itemPickerSortOption" :key="item.value" :label="item.label" :value="item.value")
        div.filter
          el-input(v-model="itemPickerFilterKeyword" :placeholder="`${$t('名前')}/DF`" clearable)
        div.filter
          el-switch(v-model="itemPickerShowStates" :active-text="$t('情報を表示')")
      div.item-picker-items
        div.item-picker-remove-item(v-if="itemPickerShowRemoveIcon" @click="onPickItem()")
          img.icon-small(src="img/icon_item_s/Texture2D/icon_item_s_10790001.png" :alt="$t('削除する')")
        div(v-for="item of filteredItemPickerItems" @click="onPickItem(item)")
          v-popover(placement="right-end" trigger="hover")
            p {{ item.NAME }}
            img.icon-small(:src="item.icon")
            template(v-if="itemPickerShowStates" slot="popover")
              div.equipment-popover(v-if="itemPickerShowStateType === 0")
                table
                  tr(v-for="state of item.getStates().filter((p) => p.total)")
                    th {{ $t(state.label) }}
                    td
                      span {{ state.total }}
                      template(v-if="state.skillValue")
                        span  (
                        span {{ state.value }}
                        span(v-if="state.skillValue")  {{ s(state.skillValue) }} {{ state.skillValue }}
                        span )
                  tr(v-for="element of item.getElements().filter((p) => p.total)")
                    th {{ $t(element.label) }}
                    td
                      span {{ element.value }}
                      span(v-if="element.skillValue")  {{ s(element.skillValue) }} {{ element.skillValue }}
                  tr(v-if="item.GROUP_DF && dataManager.charactersByGroupDf[item.GROUP_DF]")
                    th {{ $t('キャラクター專用') }}
                    td
                      p(v-for="character of dataManager.charactersByGroupDf[item.GROUP_DF]")
                        img.icon-small(:src="character.icon" :alt="character.NAME")
                br
                div(v-for="(skill, i) of item.getSkills()")
                  p {{ skill.name }}
                  p {{ skill.detail }}
                  p(v-if="item.getSkills().length !== (i + 1)") {{ '>' }}
              div.equipment-popover(v-else-if="itemPickerShowStateType === 1")
                table
                  tr(v-for="[state, value] of Formula.supportStates.map((state) => [state, item.getSupportState(state).value]).filter(([, p]) => p)")
                    th {{ $t(dataManager.lookup.state[state]) }}
                    td {{ s(value) }}{{ value }}
                  tr(v-for="[element, value] of Object.entries(item.ELM).map(([element, value]) => [element, Formula.getSupportElement(value)]).filter(([, p]) => p)")
                    th {{ $t(dataManager.lookup.element[element]) }}
                    td {{ s(value) }}{{ value }}
                  tr(v-if="item.GROUP_DF && dataManager.charactersByGroupDf[item.GROUP_DF]")
                    th {{ $t('キャラクター專用') }}
                    td
                      p(v-for="character of dataManager.charactersByGroupDf[item.GROUP_DF]")
                        img.icon-small(:src="character.icon" :alt="character.NAME")

  el-dialog(@close="onCloseSupportItemDialog" title="" :visible.sync="supportItemEditDialogVisible" width="80%")
    div.support-item-edit-dialog
      div.support-item-picker
        img.icon-small(:src="supportItemSelected.icon" :alt="supportItemSelected.name")
        div.filters
          div.filter
            el-button(@click="itemPickerDialogVisible = true") {{ $t('装備を選ぶ') }}
            el-button(@click="onAddSupportItem" type="primary") +
          div.filter
            span LV {{ $t('設定') }}
            el-input-number(v-model="supportItemAllLevel" :min="1" size="small" step-strictly)
            el-button(@click="onSetAllSupportItemLevel" type="primary" size="small") {{ $t('まとめで設定') }}
          div.filter
            el-button(@click="onRemoveAllSupportItem" type="danger" size="small") {{ $t('全部消す') }}
      br
      div {{ $t('合計') }} {{ player.supports.length }}
      table
        tr(v-for="[state, value] of ItemMVList.states.map((state) => [state, player.totalSupportState(state)]).filter(([, p]) => p)")
          th {{ $t(dataManager.lookup.state[state]) }}
          th {{ value }}
        tr(v-for="[element, value] of Object.keys(dataManager.lookup.element).map((element) => [element, player.totalSupportElement(element)]).filter(([, p]) => p)")
          th {{ $t(dataManager.lookup.element[element]) }}
          th {{ value }}
      div.support-item-editor-items
        div(v-for="(support, i) of player.supports")
          p
            el-input-number(v-model="support.modifier.level" :min="1" size="small" step-strictly)
            el-button(@click="onRemoveSupportItem(i)" type="danger" icon="el-icon-delete" circle)
          p
            img.icon-small(:src="support.item.icon")
          table
            tr(v-for="state of support.item.getSupportStates(support.modifier.level).filter((p) => p.value)")
              th {{ $t(state.label) }}
              td {{ s(state.value) }}{{ state.value }}
            tr(v-for="element of support.item.getSupportElements(support.modifier.level).filter((p) => p.value)")
              th {{ $t(element.label) }}
              td {{ s(element.value) }}{{ element.value }}
            tr(v-if="support.item.GROUP_DF && dataManager.charactersByGroupDf[support.item.GROUP_DF]")
              th {{ $t('キャラクター專用') }}
              td
                p(v-for="character of dataManager.charactersByGroupDf[support.item.GROUP_DF]")
                  img.icon-small(:src="character.icon" :alt="character.NAME")

  el-dialog(title="" :visible.sync="mainItemEditorVisible" width="80%")
    div.support-item-edit-dialog
      h3 {{ $t('まとめで設定') }}
      table
        tr
          th {{ $t('品質') }}
          td
            el-input-number(v-model="mainItemAllQuality" :min="1" size="small" step-strictly)
          td
            el-button(@click="onConfirmSetAllMainItemQuality" type="primary") {{ $t('確認') }}
        tr
          th LV
          td
            el-input-number(v-model="mainItemAllLevel" :min="1" size="small" step-strictly)
          td
            el-button(@click="onConfirmSetAllMainItemLevel" type="primary") {{ $t('確認') }}
        tr
          th {{ $t('特性') }}
          td
            el-select(v-model="mainItemAllSkillId" filterable clearable)
              el-option(v-for="skill of dataManager.skillAddonsEquipmentUseful" :key="skill.id" :label="skill.name" :value="skill.id")
          td
            el-button(@click="onConfirmSetAllMainItemSkill" type="primary") {{ $t('確認') }}

  el-dialog(title="" :visible.sync="importDialogVisible" width="80%")
    div
      el-input(v-model="importString" type="textarea" :autosize="{ minRows: 4 }")
      br
      br
      el-button(@click="onImportFromString" icon="el-icon-check" type="success" circle)

  el-dialog(title="" :visible.sync="exportDialogVisible" width="80%")
    div
      h4 URL
      p
        el-input(:value="exportUrl" type="textarea" autosize)
      br
      br
      p
        el-input(:value="exportString" type="textarea" autosize)

  el-dialog(title="" :visible.sync="characterEditDialogVisible" width="80%")
    div.character-edit-dialog
      div.character-picker
        div(@click="onPickCharacter()")
          img(src="img/icon_item_s/Texture2D/icon_item_s_10790001.png")
        div(v-for="character of dataManager.charactersCanBattle" :class="{ 'selected-character': player.character && player.character.DF === character.DF }" @click="onPickCharacter(character)")
          img(:src="character.icon" :alt="character.NAME")
      div.character-state
        div(v-if="player.character")
          h3
            router-link(:to="{ name: 'CharactersCharacter', query: { df: player.character.DF, level: player.characterModifier.level, foodLevel: player.characterModifier.foodLevel } }" target="_blank")
              span {{ player.character.NAME }}
          img.character-image(:src="player.character.icon" :alt="player.character.NAME")
          table
            tr
              th LV
              td
                el-input-number(v-model="player.characterModifier.level" :min="1" size="small" step-strictly)
            tr
              th {{ $t('食事') }} LV
              td
                el-input-number(v-model="player.characterModifier.foodLevel" :min="0" :max="player.characterModifier.level" size="small" step-strictly)
            tr
              th {{ $t('ブレイズアーツ') }} LV
              td
                el-input-number(v-model="player.characterModifier.blazeArtLevel" label="" :min="0" :max="player.character.BA.length ? 5 : 0" size="small" step-strictly)
          table
            tr(v-for="state of player.character.getStates(player.characterModifier.level, player.characterModifier.foodLevel)")
              th
                v-popover(placement="right-end" trigger="hover")
                  span {{ $t(state.label) }}
                  template(slot="popover")
                    div.character-state-popover
                      table
                        tr
                          th {{ $t('ベース') }}
                          td {{ state.value }}
                        tr(v-if="state.foodValue")
                          th {{ $t('食事') }}
                          td {{ state.foodValue }}
                        tr(v-if="state.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of state.skills") {{ skill.name }} {{ s(skill.effectValue) }}{{ skill.effectValue }}
              td
                v-popover(placement="right-end" trigger="hover")
                  span {{ state.value + state.foodValue + state.skillValue }}
                  template(slot="popover")
                    div.character-state-popover
                      table
                        tr
                          th {{ $t('ベース') }}
                          td {{ state.value }}
                        tr(v-if="state.foodValue")
                          th {{ $t('食事') }}
                          td {{ state.foodValue }}
                        tr(v-if="state.skills.length")
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of state.skills") {{ skill.name }} {{ s(skill.effectValue) }}{{ skill.effectValue }}
            tr(v-for="element of player.character.getElements(player.characterModifier.level)")
              th
                v-popover(placement="right-end" trigger="hover")
                  span {{ $t(element.label) }}
                  template(v-if="element.value" slot="popover")
                    div.character-state-popover
                      table
                        tr
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of element.skills") {{ skill.name }} {{ s(skill.effectValue) }}{{ skill.effectValue }}
              td
                v-popover(placement="right-end" trigger="hover")
                  span {{ element.value }}
                  template(v-if="element.value" slot="popover")
                    div.character-state-popover
                      table
                        tr
                          th {{ $t('スキル') }}
                          td
                            p(v-for="skill of element.skills") {{ skill.name }} {{ s(skill.effectValue) }}{{ skill.effectValue }}
          div
            el-divider
            div(v-for="skill in player.character.getSkillWithComboSkills(player.characterModifier.level)")
              v-popover(placement="right-end" trigger="hover")
                p {{ skill.name }}
                template(slot="popover")
                  div.popover-base
                    p.popover-base__detail(v-if="skill.detail") {{ skill.detail }}
                    br
                    p {{ $t('数値') }}: {{ skill.effectValue }}, {{ skill.effectValue2 }}
                    p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}j
                    p(v-for="[state, abnormalState] of skill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}

  el-dialog(title="" :visible.sync="enemyEditDialogVisible" width="80%")
    div.enemy-edit
      div.enemy-edit-picker
        div.filters
          div.filter
            el-select(v-model="enemyPickerEKind" :placeholder="$t('種類')" clearable filterable)
              el-option(v-for="item of enemyCategoryFilter" :key="item.value" :label="item.label" :value="item.value")
          div.filter
            span {{ $t('名前') }}/DF
            el-input(v-model="enemyPickerName" clearable)
        div.item-picker-items
          div.item-picker-remove-item(@click="onPickEnemy()")
            img.icon-small(src="img/icon_item_s/Texture2D/icon_item_s_10790001.png" :alt="$t('削除する')")
          div(v-for="enemy of filteredEnemies" @click="onPickEnemy(enemy)")
            p.item-name {{ enemy.strName }}
            img.icon-small(:src="enemy.icon" :alt="enemy.strName")
      div.enemy-edit-enemy(v-if="enemy.enemy")
        h3
          router-link(v-if="enemy.enemy" :to="{ name: 'EnemiesEnemy', query: { df: enemy.enemy.DF, level: enemy.level } }" target="_blank")
            span {{ enemy.enemy.strName }} (LV {{ enemy.level }})
        img.icon-full(:src="enemy.enemy.icon" :alt="enemy.enemy.strName")
        el-form
          el-form-item(label="LV")
            el-input-number(v-model="enemy.level" :min="1" size="small" step-strictly)
        div
          table.enemy-edit-enemy__state-table
            tr(v-for="state of enemy.enemy.getStates(enemy.level)")
              th {{ $t(state.label) }}
              td {{ state.value }}
            tr(v-for="element of enemy.enemy.getElements(enemy.level).filter((p) => p.value)")
              th {{ $t(element.label) }}
              td {{ element.value }}
        div(v-if="enemy.enemy.sParam.SKILL.length")
          el-divider
          div(v-for="(skill, i) of enemy.enemy.sParam.SKILL.map((p) => dataManager.skillById[p.DF]).filter((p) => p)")
            v-popover(placement="right-end" trigger="hover")
              p {{ skill.name }}
              template(slot="popover")
                div.popover-base
                  p.popover-base__detail(v-if="skill.detail") {{ skill.detail }}
                  br
                  p(v-if="skill.type === 1") {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }} {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }}
                  p {{ skill.effectValue }}, {{ skill.effectValue2 }}
                  p(v-for="[state, abnormalState] of skill.stateOwn.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}j
                  p(v-for="[state, abnormalState] of skill.state.map((p) => [p, dataManager.abnormalStateById[p.id]])") {{ (state.rate * 100).toFixed() }}% {{ abnormalState.name }} {{ abnormalState.turn }}{{ $t('ターン') }}

  div.character-builder-container
    div.top-equipment-container
      div.filters
        el-button(@click="importDialogVisible = true" type="warning" round) {{ $t('インポート') }}
        el-button(@click="exportDialogVisible = true" round) {{ $t('エクスポート') }}
        el-button(@click="onSave" type="primary" round) {{ $t('保存') }}
        el-button(@click="onClear" type="danger" round) {{ $t('クリアー') }}
      div.equipment-container
        div.main-equipment-container
          div.filters
            el-button(@click="mainItemEditorVisible = true" type="success" icon="el-icon-edit" circle)
            span {{ $t('まとめで設定') }}
          div.main-equipments
            div.left-equipment
              template(v-for="slot of ['weapon', 'shield', 'helmet', 'armor']")
                v-popover(placement="right-end" trigger="hover")
                  div.equipment-icon
                    p {{ $t('品質') }} {{ player.equipmentModifiers[slot].quality }} LV {{ player.equipmentModifiers[slot].level }}
                    img(@click="onPickEquipment(slot)" :src="getEquipmentImage(slot)")
                  template(v-if="player.equipment[slot]" slot="popover")
                    div.equipment-popover
                      h3
                        router-link(:to="{ name: 'ItemsItem', query: { df: player.equipment[slot].item.DF, quality: player.equipmentModifiers[slot].quality, level: player.equipmentModifiers[slot].level } }" target="_blank")
                          span {{ player.equipment[slot].item.NAME }}
                      table
                        tr
                          th {{ $t('品質') }}
                          td
                            el-input-number(v-model="player.equipmentModifiers[slot].quality" :min="1" size="small" step-strictly)
                        tr
                          th LV
                          td
                            el-input-number(v-model="player.equipmentModifiers[slot].level" :min="1" size="small" step-strictly)
                        tr
                          th {{ $t('特性') }}
                          td
                            v-select.skill-addon-select(:options="dataManager.skillAddonsEquipmentUseful" label="name" :value="player.equipmentModifiers[slot].skill" @input="(value) => setEquipmentModifierSkill(value, slot)")
                              div(slot="no-options")
                      table
                        tr(v-for="state of getEquipmentStates(slot)")
                          th {{ $t(state.label) }}
                          td
                            span {{ state.total }}
                            template(v-if="state.skillValue || state.addonValue")
                              span  (
                              span {{ state.value }}
                              span(v-if="state.skillValue")  {{ s(state.skillValue) }} {{ state.skillValue }}
                              span(v-if="state.addonValue")  {{ s(state.addonValue) }} {{ state.addonValue }}
                              span )
                        tr(v-for="element of getEquipmentElements(slot)")
                          th {{ $t(element.label) }}
                          td
                            span {{ element.total }}
                              template(v-if="element.skillValue || element.addonValue")
                                span  (
                                span {{ element.value }}
                                span(v-if="element.skillValue")  {{ s(element.skillValue) }} {{ element.skillValue }}
                                span(v-if="element.addonValue")  {{ s(element.addonValue) }} {{ element.addonValue }}
                                span )
                        tr(v-if="player.equipment[slot].item.GROUP_DF && dataManager.charactersByGroupDf[player.equipment[slot].item.GROUP_DF]")
                          th {{ $t('キャラクター專用') }}
                          td
                            p(v-for="character of dataManager.charactersByGroupDf[player.equipment[slot].item.GROUP_DF]")
                              img.icon-small(:src="character.icon" :alt="character.NAME")
                      br
                      div(v-for="(skill, i) of getEquipmentSkills(slot)")
                        p {{ skill.name }}
                        p {{ skill.detail }}
                        p(v-if="getEquipmentSkills(slot).length !== (i + 1)") {{ '>' }}

            div.right-equipment
              template(v-for="slot of rightEquipments")
                v-popover(placement="right-end" trigger="hover")
                  div.equipment-icon
                    p {{ $t('品質') }} {{ player.equipmentModifiers[slot].quality }} LV {{ player.equipmentModifiers[slot].level }}
                    img(@click="onPickEquipment(slot)" :src="getEquipmentImage(slot)")
                  template(v-if="player.equipment[slot]" slot="popover")
                    div.equipment-popover
                      h3
                        router-link(:to="{ name: 'ItemsItem', query: { df: player.equipment[slot].item.DF, quality: player.equipmentModifiers[slot].quality, level: player.equipmentModifiers[slot].level } }" target="_blank")
                          span {{ player.equipment[slot].item.NAME }}
                      table
                        tr
                          th {{ $t('品質') }}
                          td
                            el-input-number(v-model="player.equipmentModifiers[slot].quality" :min="1" size="small" step-strictly)
                        tr
                          th LV
                          td
                            el-input-number(v-model="player.equipmentModifiers[slot].level" :min="1" size="small" step-strictly)
                        tr
                          th {{ $t('特性') }}
                          td
                            v-select.skill-addon-select(:options="dataManager.skillAddonsEquipmentUseful" label="name" :value="player.equipmentModifiers[slot].skill" @input="(value) => setEquipmentModifierSkill(value, slot)")
                              div(slot="no-options")
                      table
                        tr(v-for="state of getEquipmentStates(slot)")
                          th {{ $t(state.label) }}
                          td
                            span {{ state.total }}
                            template(v-if="state.skillValue || state.addonValue")
                              span  (
                              span {{ state.value }}
                              span(v-if="state.skillValue")  {{ s(state.skillValue) }} {{ state.skillValue }}
                              span(v-if="state.addonValue")  {{ s(state.addonValue) }} {{ state.addonValue }}
                              span )
                        tr(v-for="element of getEquipmentElements(slot)")
                          th {{ $t(element.label) }}
                          td
                            span {{ element.total }}
                              template(v-if="element.skillValue || element.addonValue")
                                span  (
                                span {{ element.value }}
                                span(v-if="element.skillValue")  {{ s(element.skillValue) }} {{ element.skillValue }}
                                span(v-if="element.addonValue")  {{ s(element.addonValue) }} {{ element.addonValue }}
                                span )
                        tr(v-if="player.equipment[slot].item.GROUP_DF && dataManager.charactersByGroupDf[player.equipment[slot].item.GROUP_DF]")
                          th {{ $t('キャラクター專用') }}
                          td
                            p(v-for="character of dataManager.charactersByGroupDf[player.equipment[slot].item.GROUP_DF]")
                              img.icon-small(:src="character.icon" :alt="character.NAME")
                      br
                      div(v-for="(skill, i) of getEquipmentSkills(slot)")
                        p {{ skill.name }}
                        p {{ skill.detail }}
                        p(v-if="getEquipmentSkills(slot).length !== (i + 1)") {{ '>' }}

        div.sub-equipment
          div.sub-equipment-menu
            div.filters
              el-button(@click="openSupportItemEditDialog" type="success" icon="el-icon-edit" circle)
              span {{ $t('サブ装備') }} x {{ player.supports.length }}

          div.sub-equipment-items
            div(v-for="(support, i) of player.supports")
              v-popover(placement="right-end" trigger="hover")
                img(:src="support.item.icon" :alt="support.item.NAME")
                template(slot="popover")
                  div.equipment-popover
                    h3
                      router-link(:to="{ name: 'ItemsItem', query: { df: support.item.DF, level: support.modifier.level } }" target="_blank")
                        span {{ support.item.NAME }} (LV {{ support.modifier.level }})
                    table
                      tr(v-for="state of support.item.getSupportStates(support.modifier.level).filter((p) => p.value)")
                        th {{ $t(state.label) }}
                        td {{ s(state.value) }}{{ state.value }}
                      tr(v-for="element of support.item.getSupportElements(support.modifier.level).filter((p) => p.value)")
                        th {{ $t(element.label) }}
                        td {{ s(element.value) }}{{ element.value }}
                      tr(v-if="support.item.GROUP_DF && dataManager.charactersByGroupDf[support.item.GROUP_DF]")
                        th {{ $t('キャラクター專用') }}
                        td
                          p(v-for="character of dataManager.charactersByGroupDf[support.item.GROUP_DF]")
                            img.icon-small(:src="character.icon" :alt="character.NAME")

    div.result
      div.character
        div
          h4
            span
              el-button(@click="characterEditDialogVisible = true" type="primary" icon="el-icon-edit" circle)
            router-link(v-if="player.character" :to="{ name: 'CharactersCharacter', query: { df: player.character.DF, level: player.characterModifier.level, foodLevel: player.characterModifier.foodLevel } }" target="_blank")
              span {{ player.character.NAME }} (LV {{ player.characterModifier.level }}) ({{ $t('食事') }} LV {{ player.characterModifier.foodLevel }})
          img(v-if="player.character" :src="player.character.icon" :alt="player.character.NAME")
      div
        el-select(v-model="player.abnormalStateIds" :placeholder="$t('異常状態')" multiple filterable clearable)
          el-option(v-for="abnormalState of abnormalStates" :key="abnormalState.id" :label="abnormalState.name" :value="abnormalState.id")
      table
        tr
          th
            v-popover(placement="left-end" trigger="hover")
              span {{ $t('強さ') }}
              template(slot="popover")
                div.equipment-popover {{ $t('強さ') }} = sum({{ $t('物理攻撃') }}{{ $t('ベース') }} + {{ $t('物理防禦') }}{{ $t('ベース') }} + {{ $t('魔法攻撃') }}{{ $t('ベース') }} + {{ $t('魔法防禦') }}{{ $t('ベース') }})
          td
            v-popover(placement="left-end" trigger="hover")
              span {{ player.strength }}
              template(slot="popover")
                div.equipment-popover {{ $t('強さ') }} = sum({{ $t('物理攻撃') }}{{ $t('ベース') }} + {{ $t('物理防禦') }}{{ $t('ベース') }} + {{ $t('魔法攻撃') }}{{ $t('ベース') }} + {{ $t('魔法防禦') }}{{ $t('ベース') }})
        tr(v-for="state of ItemMVList.states")
          th
            v-popover(placement="left-end" trigger="hover")
              span {{ $t(dataManager.lookup.state[state]) }}
              template(slot="popover")
                div.equipment-popover
                  span {{ $t(dataManager.lookup.state[state]) }}
                  table
                    tr(v-if="player.character")
                      th
                        img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                      td {{ $t('ベース') }} {{ player.character.getBaseState(state, player.characterModifier.level) }} / {{ $t('食事') }} {{ player.character.getFoodState(state, player.characterModifier.foodLevel) }} / {{ $t('スキル') }} {{ player.character.getState(state, player.characterModifier.level, player.characterModifier.foodLevel).skillValue }}
                    tr(v-for="[slot, equipment, state] of player.equipments.map(([slot, equipment]) => [slot, equipment, getEquipmentState(state, slot)]).filter(([,, p]) => p.value || p.skillValue || p.addonValue)")
                      th
                        img.icon-small(:src="equipment.item.icon" :alt="equipment.item.NAME")
                      td {{ $t('ベース') }} {{ state.value }} / {{ $t('スキル') }} {{ state.skillValue }} / {{ $t('特性') }} {{ state.addonValue }}
                    tr(v-for="value of [player.supports.reduce((sum, p) => sum + p.item.getSupportState(state, p.modifier.level).value, 0)].filter((p) => p)")
                      th {{ $t('サブ装備') }}
                      td {{ value }}
          td
            v-popover(placement="left-end" trigger="hover")
              span
                span {{ player.totalState(state) }}
                span(v-if="state === 'SADD' && player.equipment.weapon && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality) && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality).spAdd")  x {{ 1 + player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality).spAdd }}
              template(slot="popover")
                div.equipment-popover
                  span {{ $t(dataManager.lookup.state[state]) }}
                  table
                    tr(v-if="player.character")
                      th
                        img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                      td {{ $t('ベース') }} {{ player.character.getBaseState(state, player.characterModifier.level) }} / {{ $t('食事') }} {{ player.character.getFoodState(state, player.characterModifier.foodLevel) }} / {{ $t('スキル') }} {{ player.character.getState(state, player.characterModifier.level, player.characterModifier.foodLevel).skillValue }}
                    tr(v-for="[slot, equipment, state] of player.equipments.map(([slot, equipment]) => [slot, equipment, getEquipmentState(state, slot)]).filter(([,, p]) => p.value || p.skillValue || p.addonValue)")
                      th
                        img.icon-small(:src="equipment.item.icon" :alt="equipment.item.NAME")
                      td {{ $t('ベース') }} {{ state.value }} / {{ $t('スキル') }} {{ state.skillValue }} / {{ $t('特性') }} {{ state.addonValue }}
                    tr(v-if="state === 'SADD' && player.equipment.weapon && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality) && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality).spAdd")
                      th
                        img.icon-small(:src="player.equipment.weapon.item.icon" :alt="player.equipment.weapon.item.NAME")
                      td x {{ 1 + player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality).spAdd }}
                    tr(v-for="value of [player.supports.reduce((sum, p) => sum + p.item.getSupportState(state, p.modifier.level).value, 0)].filter((p) => p)")
                      th {{ $t('サブ装備') }}
                      td {{ value }}
        tr(v-for="[element, label] of Object.entries(dataManager.lookup.element)")
          th
            v-popover(placement="left-end" trigger="hover")
              span {{ $t(label) }}
              template(slot="popover")
                div.equipment-popover
                  h4 {{ $t(label) }}
                  table
                    tr(v-if="player.character && player.character.getElement(element, player.characterModifier.level).value")
                      th
                        img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                      td {{ player.character.getElement(element, player.characterModifier.level).value }}
                    tr(v-for="[slot, equipment, element] of player.equipments.map(([slot, equipment]) => [slot, equipment, getEquipmentElement(element, slot)]).filter(([,,p]) => p.value || p.skillValue || p.addonValue)")
                      th
                        img.icon-small(:src="getEquipmentImage(slot)" :alt="equipment.item.NAME")
                      td {{ $t('ベース') }} {{ element.value }} / {{ $t('スキル') }} {{ element.skillValue }} / {{ $t('特性') }} {{ element.addonValue }}
                    tr(v-for="value of [player.supports.reduce((sum, p) => sum + p.item.getSupportElement(element).value, 0)].filter((p) => p)")
                      th {{ $t('サブ装備') }}
                      td {{ value }}
          td
            v-popover(placement="left-end" trigger="hover")
              span {{ player.totalElement(element) }}
              template(slot="popover")
                div.equipment-popover
                  h4 {{ $t(label) }}
                  table
                    tr(v-if="player.character && player.character.getElement(element, player.characterModifier.level).value")
                      th
                        img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                      td {{ player.character.getElement(element, player.characterModifier.level).value }}
                    tr(v-for="[slot, equipment, element] of player.equipments.map(([slot, equipment]) => [slot, equipment, getEquipmentElement(element, slot)]).filter(([,,p]) => p.value || p.skillValue || p.addonValue)")
                      th
                        img.icon-small(:src="getEquipmentImage(slot)" :alt="equipment.item.NAME")
                      td {{ $t('ベース') }} {{ element.value }} / {{ $t('スキル') }} {{ element.skillValue }} / {{ $t('特性') }} {{ element.addonValue }}
                    tr(v-for="value of [player.supports.reduce((sum, p) => sum + p.item.getSupportElement(element).value, 0)].filter((p) => p)")
                      th {{ $t('サブ装備') }}
                      td {{ value }}
        tr
          th
            v-popover(placement="left-end" trigger="hover")
              span {{ $t('スキル') }}
              template(v-if="player.skillMultipliers.base || player.skillMultipliers.chain" slot="popover")
                div.equipment-popover
                  div(v-if="player.skillMultipliers.characterBaseSkills.length || player.skillMultipliers.equipmentBaseSkills.length")
                    h4 {{ $t('ベース') }}
                    table
                      tr(v-if="player.character" v-for="skill of player.skillMultipliers.characterBaseSkills")
                        th
                          img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                        td {{ skill.name }}
                        td {{ skill.effectValue }}
                      tr(v-for="{ slot, skill } of player.skillMultipliers.equipmentBaseSkills")
                        th
                          img.icon-small(:src="getEquipmentImage(slot)" :alt="player.equipment[slot].item.NAME")
                        th {{ skill.name }}
                        td {{ skill.effectValue }}
                  div(v-if="player.skillMultipliers.characterChainSkills.length || player.skillMultipliers.equipmentChainSkills.length")
                    h4 {{ $t('連携') }}
                    table
                      tr(v-if="player.character" v-for="skill of player.skillMultipliers.characterChainSkills")
                        th
                          img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                        td {{ skill.name }}
                        td {{ skill.effectValue }}
                      tr(v-for="{ slot, skill } of player.skillMultipliers.equipmentChainSkills")
                        th
                          img.icon-small(:src="getEquipmentImage(slot)" :alt="player.equipment[slot].item.NAME")
                        th {{ skill.name }}
                        td {{ skill.effectValue }}
          td
            v-popover(placement="left-end" trigger="hover")
              span {{ $t('ベース') }} x {{ (1 + player.skillMultipliers.base).toFixed(3) }} / {{ $t('連携') }} x {{ (1 + player.skillMultipliers.chain).toFixed(3) }}
              template(v-if="player.skillMultipliers.base || player.skillMultipliers.chain" slot="popover")
                div.equipment-popover
                  div(v-if="player.skillMultipliers.characterBaseSkills.length || player.skillMultipliers.equipmentBaseSkills.length")
                    h4 {{ $t('ベース') }}
                    table
                      tr(v-if="player.character" v-for="skill of player.skillMultipliers.characterBaseSkills")
                        th
                          img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                        td {{ skill.name }}
                        td {{ skill.effectValue }}
                      tr(v-for="{ slot, skill } of player.skillMultipliers.equipmentBaseSkills")
                        th
                          img.icon-small(:src="getEquipmentImage(slot)" :alt="player.equipment[slot].item.NAME")
                        th {{ skill.name }}
                        td {{ skill.effectValue }}
                  div(v-if="player.skillMultipliers.characterChainSkills.length || player.skillMultipliers.equipmentChainSkills.length")
                    h4 {{ $t('連携') }}
                    table
                      tr(v-if="player.character" v-for="skill of player.skillMultipliers.characterChainSkills")
                        th
                          img.icon-small(:src="player.character.icon" :alt="player.character.NAME")
                        td {{ skill.name }}
                        td {{ skill.effectValue }}
                      tr(v-for="{ slot, skill } of player.skillMultipliers.equipmentChainSkills")
                        th
                          img.icon-small(:src="getEquipmentImage(slot)" :alt="player.equipment[slot].item.NAME")
                        th {{ skill.name }}
                        td {{ skill.effectValue }}
      br
      div
        span {{ $t('スキル') }}{{ $t('連携') }} x {{ +(1 + skillChain * .2).toFixed(15) }}
        el-slider(v-model="skillChain" :step="1" :max="14")
      br
      template(v-if="player.character")
        div(v-for="skill of [player.character.getBlazeArt(player.characterModifier.level, player.characterModifier.blazeArtLevel)].filter((p) => p)")
          h4 {{ $t('ブレイズアーツ') }} (LV {{ player.characterModifier.blazeArtLevel }}) {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }} {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
          img.icon-small(:src="player.character.faceIcon" :alt="skill.name")
          p {{ skill.name }}
          p {{ skill.detail }}
          div(v-if="skill.attribute === 3")
            table
              tr
                th 正常
                td {{ player.attack([player.totalState('MATK'), skill.effectValue], skillChain) }}
              tr
                th 魔法攻撃UP中
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3], skillChain) }}
              tr
                th 上+魔法防御DOWN大
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3, 1.4], skillChain) }}
              tr
                th 上+屬性(-100)
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
              tr
                th 全超+-
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
          div(v-else-if="skill.attribute")
            table
              tr
                th 正常
                td {{ player.attack([player.totalState('SATK'), skill.effectValue], skillChain) }}
              tr
                th 物攻増UP中+
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35], skillChain) }}
              tr
                th 上+物理防御DOWN大
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35, 1.4], skillChain) }}
              tr
                th 上+屬性(-100)
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
              tr
                th 全超+-
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
        br
      template(v-if="player.equipment.weapon && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality)")
        div(v-for="skill of [player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality)]")
          h4 {{ $t('武器') }} {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }} {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
          img.icon-small(:src="skill.icon" :alt="skill.name")
          p {{ skill.name }}
          p {{ skill.detail }}
          div(v-if="skill.attribute === 3")
            table
              tr
                th 正常
                td {{ player.attack([player.totalState('MATK'), skill.effectValue], skillChain) }}
              tr
                th 魔法攻撃UP中
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3], skillChain) }}
              tr
                th 上+魔法防御DOWN大
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3, 1.4], skillChain) }}
              tr
                th 上+屬性(-100)
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
              tr
                th 全超+-
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
          div(v-else-if="skill.attribute")
            table
              tr
                th 正常
                td {{ player.attack([player.totalState('SATK'), skill.effectValue], skillChain) }}
              tr
                th 物攻増UP中+
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35], skillChain) }}
              tr
                th 上+物理防御DOWN大
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35, 1.4], skillChain) }}
              tr
                th 上+屬性(-100)
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
              tr
                th 全超+-
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
        br
      template(v-if="player.equipment.shield && player.equipment.shield.item.getAttackSkill(player.equipmentModifiers.shield.quality)")
        div(v-for="skill of [player.equipment.shield.item.getAttackSkill(player.equipmentModifiers.shield.quality)]")
          h4 {{ $t('盾') }} {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }} {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
          img.icon-small(:src="`img/icon_skill/Texture2D/${skill.iconPath}.png`" :alt="skill.name")
          p {{ skill.name }}
          p {{ skill.detail }}
          div(v-if="skill.attribute === 3")
            table
              tr
                th 正常
                td {{ player.attack([player.totalState('MATK'), skill.effectValue], skillChain) }}
              tr
                th 魔法攻撃UP中
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3], skillChain) }}
              tr
                th 上+魔法防御DOWN大
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3, 1.4], skillChain) }}
              tr
                th 上+屬性(-100)
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.3, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
              tr
                th 全超+-
                td {{ player.attack([player.totalState('MATK'), skill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}
          div(v-else-if="skill.attribute")
            table
              tr
                th 正常
                td {{ player.attack([player.totalState('SATK'), skill.effectValue], skillChain) }}
              tr
                th 物攻増UP中+
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35], skillChain) }}
              tr
                th 上+物理防御DOWN大
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35, 1.4], skillChain) }}
              tr
                th 上+屬性(-100)
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.35, 1.4, skill.attackSkill.element ? 2 : 1], skillChain) }}
              tr
                th 全超+-
                td {{ player.attack([player.totalState('SATK'), skill.effectValue, 1.55, 1.55, skill.attackSkill.element ? 2 : 1], skillChain) }}

    div.battle
      div.enemy
        h4
          span
            el-button(@click="enemyEditDialogVisible = true" type="primary" icon="el-icon-edit" circle)
          router-link(v-if="enemy.enemy" :to="{ name: 'EnemiesEnemy', query: { df: enemy.enemy.DF, level: enemy.level } }" target="_blank")
            span {{ enemy.enemy.strName }} (LV {{ enemy.level }})
        img.enemy__icon(v-if="enemy.enemy" :src="enemy.enemy.icon" :alt="enemy.enemy.strName")
      div
        el-select(v-model="enemy.abnormalStateIds" :placeholder="$t('異常状態')" multiple filterable clearable)
          el-option(v-for="abnormalState of abnormalStates" :key="abnormalState.id" :label="abnormalState.name" :value="abnormalState.id")
      div(v-if="enemy.enemy")
        table
          tr(v-if="player.equipment.weapon || player.character" v-for="playerAttack of [player.totalState(player.attributeState)]")
            template(v-for="receiveDamage of [enemy.receiveDamage(playerAttack, player.character ? player.characterModifier.level : 0, player.element, player.attribute, player.skills, player.abnormalStateEffects)]")
              th
                v-popover(placement="left-end" trigger="hover")
                  span {{ $t(dataManager.lookup.EBattleAttribute[player.attribute]) }}
                  template(slot="popover")
                    div.popover-base
                      table
                        tr
                          th {{ $t('ベース') }}
                          td {{ playerAttack }}
                        tr(v-if="receiveDamage.defense")
                          th {{ $t('ディフェンス') }}
                          td {{ -receiveDamage.defense }}
                        tr(v-for="multiplier of receiveDamage.multipliers")
                          th {{ multiplier.translatedLabel || $t(multiplier.label) }}
                          td {{ +multiplier.value.toFixed(15) }}
                        tr(v-for="skill of receiveDamage.zeroPlusMultiplierSkills")
                          th {{ skill.name }}
                          td {{ skill.effectValue }}
                        tr(v-for="skill of receiveDamage.onePlusMultiplierSkills")
                          th {{ skill.name }}
                          td {{ +(1 + skill.effectValue).toFixed(15) }}
                        tr(v-for="skill of receiveDamage.otherEffectSkills")
                          th {{ skill.name }}
                          td {{ skill.detail }}
              td {{ receiveDamage.total.toFixed() }}
              td HP: {{ receiveDamage.hp.toFixed() }}
          tr(v-if="player.character")
            template(v-for="skill of [player.character.getBlazeArt(player.characterModifier.level, player.characterModifier.blazeArtLevel)].filter((p) => p)")
              template(v-for="playerAttack of [player.attack([player.totalState(skill.attribute === 3 ? 'MATK' : 'SATK'), skill.effectValue], skillChain)]")
                template(v-for="receiveDamage of [enemy.receiveDamage(playerAttack, player.character ? player.characterModifier.level : 0, skill.element, skill.attribute, player.skills, player.abnormalStateEffects)]")
                  th
                    v-popover(placement="left-end" trigger="hover")
                      img.icon-small(:src="player.character.faceIcon" :alt="skill.name")
                      template(slot="popover")
                        div.popover-base
                          h4 {{ $t('ブレイズアーツ') }}
                          p {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
                          table
                            tr
                              th {{ $t('ベース') }}
                              td {{ playerAttack }}
                            tr(v-if="receiveDamage.defense")
                              th {{ $t('ディフェンス') }}
                              td {{ -receiveDamage.defense }}
                            tr(v-for="multiplier of receiveDamage.multipliers")
                              th {{ multiplier.translatedLabel || $t(multiplier.label) }}
                              td {{ +multiplier.value.toFixed(15) }}
                            tr(v-for="skill of receiveDamage.zeroPlusMultiplierSkills")
                              th {{ skill.name }}
                              td {{ skill.effectValue }}
                            tr(v-for="skill of receiveDamage.onePlusMultiplierSkills")
                              th {{ skill.name }}
                              td {{ +(1 + skill.effectValue).toFixed(15) }}
                            tr(v-for="skill of receiveDamage.otherEffectSkills")
                              th {{ skill.name }}
                              td {{ skill.detail }}
                  td {{ receiveDamage.total.toFixed() }}
                  td HP: {{ receiveDamage.hp.toFixed() }}
          tr(v-if="player.equipment.weapon && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality) && player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality).attribute")
            template(v-for="skill of [player.equipment.weapon.item.getAttackSkill(player.equipmentModifiers.weapon.quality)]")
              template(v-for="playerAttack of [player.attack([player.totalState(skill.attribute === 3 ? 'MATK' : 'SATK'), skill.effectValue], skillChain)]")
                template(v-for="receiveDamage of [enemy.receiveDamage(playerAttack, player.character ? player.characterModifier.level : 0, skill.element, skill.attribute, player.skills, player.abnormalStateEffects)]")
                  th
                    v-popover(placement="left-end" trigger="hover")
                      img.icon-small(:src="skill.icon" :alt="skill.name")
                      template(slot="popover")
                        div.popover-base
                          h4 {{ $t('武器') }}
                          p {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
                          table
                            tr
                              th {{ $t('ベース') }}
                              td {{ playerAttack }}
                            tr(v-if="receiveDamage.defense")
                              th {{ $t('ディフェンス') }}
                              td {{ -receiveDamage.defense }}
                            tr(v-for="multiplier of receiveDamage.multipliers")
                              th {{ multiplier.translatedLabel || $t(multiplier.label) }}
                              td {{ +multiplier.value.toFixed(15) }}
                            tr(v-for="skill of receiveDamage.zeroPlusMultiplierSkills")
                              th {{ skill.name }}
                              td {{ skill.effectValue }}
                            tr(v-for="skill of receiveDamage.onePlusMultiplierSkills")
                              th {{ skill.name }}
                              td {{ +(1 + skill.effectValue).toFixed(15) }}
                            tr(v-for="skill of receiveDamage.otherEffectSkills")
                              th {{ skill.name }}
                              td {{ skill.detail }}
                  td {{ receiveDamage.total.toFixed() }}
                  td HP: {{ receiveDamage.hp.toFixed() }}
          tr(v-if="player.equipment.shield && player.equipment.shield.item.getAttackSkill(player.equipmentModifiers.shield.quality) && player.equipment.shield.item.getAttackSkill(player.equipmentModifiers.shield.quality).attribute")
            template(v-for="skill of [player.equipment.shield.item.getAttackSkill(player.equipmentModifiers.shield.quality)]")
              template(v-for="playerAttack of [player.attack([player.totalState(skill.attribute === 3 ? 'MATK' : 'SATK'), skill.effectValue], skillChain)]")
                template(v-for="receiveDamage of [enemy.receiveDamage(playerAttack, player.character ? player.characterModifier.level : 0, skill.element, skill.attribute, player.skills, player.abnormalStateEffects)]")
                  th
                    v-popover(placement="left-end" trigger="hover")
                      img.icon-small(:src="skill.icon" :alt="skill.name")
                      template(slot="popover")
                        div.popover-base
                          h4 {{ $t('盾') }}
                          p {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
                          table
                            tr
                              th {{ $t('ベース') }}
                              td {{ playerAttack }}
                            tr(v-if="receiveDamage.defense")
                              th {{ $t('ディフェンス') }}
                              td {{ -receiveDamage.defense }}
                            tr(v-for="multiplier of receiveDamage.multipliers")
                              th {{ multiplier.translatedLabel || $t(multiplier.label) }}
                              td {{ +multiplier.value.toFixed(15) }}
                            tr(v-for="skill of receiveDamage.zeroPlusMultiplierSkills")
                              th {{ skill.name }}
                              td {{ skill.effectValue }}
                            tr(v-for="skill of receiveDamage.onePlusMultiplierSkills")
                              th {{ skill.name }}
                              td {{ +(1 + skill.effectValue).toFixed(15) }}
                            tr(v-for="skill of receiveDamage.otherEffectSkills")
                              th {{ skill.name }}
                              td {{ skill.detail }}
                  td {{ receiveDamage.total.toFixed() }}
                  td HP: {{ receiveDamage.hp.toFixed() }}
        el-divider(v-if="player.character")
        div(v-if="player.character")
          h3.player-receive-damage__title
            img.icon-small(:src="player.character.faceIcon" :alt="player.character.NAME")
            span {{ player.character.NAME }}
          table
            tr(v-for="receiveDamage of [player.receiveDamage(enemy.attack(), 0, 0, enemy.abnormalStateEffects)]")
              th
                v-popover(placement="left-end" trigger="hover")
                  span {{ $t(dataManager.lookup.EBattleAttribute[0]) }}
                  template(slot="popover")
                    div.popover-base
                      table
                        tr
                          th {{ $t('ダメージ') }}{{ $t('ベース') }}
                          td {{ receiveDamage.damage.toFixed() }}
                        tr(v-if="receiveDamage.defense")
                          th {{ $t('ディフェンス') }}
                          td {{ -receiveDamage.defense }}
                        tr(v-for="multiplier of receiveDamage.multipliers")
                          th {{ multiplier.translatedLabel || $t(multiplier.label) }}
                          td {{ +multiplier.value.toFixed(15) }}
              td {{ receiveDamage.total.toFixed() }}
              td HP: {{ receiveDamage.hp.toFixed() }}
            tr(v-for="skill of enemy.enemy.skills.filter((p) => p.type === 1 && p.effect === 1)")
              template(v-for="receiveDamage of [player.receiveDamage(enemy.attack(skill.attackSkill.attribute) * (+(1 + skill.effectValue).toFixed(15)), skill.attackSkill.attribute, skill.attackSkill.element, enemy.abnormalStateEffects)]")
                th
                  v-popover(placement="left-end" trigger="hover")
                    span {{ skill.name }}
                    template(slot="popover")
                      div.popover-base
                        h4 {{ $t(dataManager.lookup.EBattleElementKind[skill.attackSkill.element]) }} {{ $t(dataManager.lookup.EBattleAttribute[skill.attackSkill.attribute]) }}
                        table
                          tr
                            th {{ $t('ダメージ') }}{{ $t('ベース') }}
                            td {{ receiveDamage.damage.toFixed() }}
                          tr(v-if="receiveDamage.defense")
                            th {{ $t('ディフェンス') }}
                            td {{ -receiveDamage.defense }}
                          tr(v-for="multiplier of receiveDamage.multipliers")
                            th {{ multiplier.translatedLabel || $t(multiplier.label) }}
                            td {{ +multiplier.value.toFixed(15) }}
                td {{ receiveDamage.total.toFixed() }}
                td HP: {{ receiveDamage.hp.toFixed() }}
</template>

<script lang="ts">
import 'vue-select/dist/vue-select.css';

import Component from 'vue-class-component';
import VueBase from '@/utils/VueBase';
import vSelect from 'vue-select';
import { dataManager } from '@/utils/DataManager';
import { MVList as ItemMVList } from '@/master/item';
import { MVList as CharacterMVList } from '@/master/chara';
import { MVList as EnemyMVList } from '@/master/enemy';
import { Player, PlayerExport } from '@/logic/entities/Player';
import { Enemy } from '@/logic/entities/Enemy';
import { Formula } from '@/logic/Formula';
import { EquipmentItem } from '@/logic/items/EquipmentItem';
import { EAbnormalStateTarget, ECategory } from '@/logic/Enums';
import { pascalCase } from 'pascal-case';
import { plainToClass } from 'class-transformer';
import { PlayerExportVersionConvertor } from '@/logic/convertor/PlayerExportVersionConvertor';
import { clamp } from 'lodash';
import Enumerable from 'linq';

@Component({
  components: {
    'v-select': vSelect,
  },
  async beforeRouteLeave(to, from, next) {
    if (this.hasChange) {
      try {
        await this.$confirm(this.unsavedMessage, '', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
        });
      } catch (e) {
        next(false);
        return;
      }
    }
    next();
  },
})
export default class extends VueBase {
  public get Formula() {
    return Formula;
  }

  public get ItemMVList() {
    return ItemMVList;
  }

  public get clamp() {
    return clamp;
  }

  //
  public get abnormalStates() {
    const effectIds = this.dataManager.abnormalStateEffectsAttackStates
      .concat(this.dataManager.abnormalStateEffectsElements)
      .concat(this.dataManager.abnormalStateEffectsByTarget[EAbnormalStateTarget.eSDEF] || [])
      .concat(this.dataManager.abnormalStateEffectsByTarget[EAbnormalStateTarget.eMDEF] || [])
      .map((p) => p.id);
    return this.dataManager.abnormalState.m_vList.filter((p) => p.effectlist.some((i) => effectIds.includes(i)));
  }

  // dialog
  public characterEditDialogVisible = false

  public enemyEditDialogVisible = false;

  // enemy picker
  public enemyPickerEKind: number | null = null;

  public enemyPickerName = '';

  public get enemyCategoryFilter() {
    return this.dataManager.enemy.KindList
      .filter((p) => p.iKind)
      .map((p) => ({
        label: p.strName,
        value: p.iKind,
      }));
  }

  public get enemies() {
    return this.enemyPickerEKind ? (this.dataManager.enemiesByEKind[this.enemyPickerEKind] || []) : this.dataManager.enemiesOrderByCategory;
  }

  public get filteredEnemies() {
    return this.enemies.filter((p) => (
      (!this.enemyPickerName || p.DF === +this.enemyPickerName || p.strName.toLocaleLowerCase().includes(this.enemyPickerName.toLocaleLowerCase()))
    )).reverse();
  }

  public onPickEnemy(enemy: EnemyMVList) {
    this.enemy.enemy = enemy;
  }

  // item picker dialog
  public get itemPickerSortOption() {
    const itemStates = ['SATK', 'SDEF', 'MATK', 'MDEF', 'SPD', 'QTH', 'DDG'];
    return itemStates.map((value) => ({
      label: this.$t(dataManager.lookup.state[value]),
      value,
    }))
      .concat(itemStates.map((value) => ({
        label: `${this.$t(dataManager.lookup.state[value])}(${this.$t('サブ装備')})`,
        value: `${value}_base`,
      })))
      .concat(Object.entries(dataManager.lookup.element).map(([value, label]) => ({
        label,
        value,
      })))
      .concat(Object.entries(dataManager.lookup.element).map(([value, label]) => ({
        label: `${label}(${this.$t('サブ装備')})`,
        value: `${value}_base`,
      })));
  }

  public get itemPicker() {
    return [
      this.itemPickerSort,
      this.itemPickerShowStates,
      this.itemPickerShowStateType,
      this.itemPickerFilterCategory,
      this.itemPickerFilterKeyword,
      this.itemPickerFilterCharacterGender,
      this.itemPickerFilterWeaponGen,
      this.itemPickerFilterGroupDf,
    ];
  }

  public itemPickerShowRemoveIcon = true;

  public itemPickerShowSort = true;

  public itemPickerSort = '';

  public itemPickerShowStates = false;

  public itemPickerShowStateType = 0; // 0 = full state, 1 = support only

  public itemPickerDialogVisible = false;

  public itemPickerFilterCategory: number | null = null;

  public itemPickerFilterKeyword = '';

  public itemPickerFilterCharacterGender: number | null = null; // gen_id, EQU_GND

  public itemPickerFilterWeaponGen = [] as number[]; // [gen_id], GEN

  public itemPickerFilterGroupDf: number | null = null;

  public itemPickerCallback: (item: ItemMVList) => void | null = null;

  private itemPickerSortCache = new Map<string, ItemMVList[]>();

  // support item picker
  public itemPickerSortOriginal: string | null = null;

  public supportItemEditDialogVisible = false;

  public supportItemSelected = dataManager.itemsEquipments[0];

  public supportItemAllLevel = ItemMVList.equipmentMaxLevel;

  // main item editor
  public mainItemEditorVisible = false;

  public mainItemAllQuality = ItemMVList.equipmentMaxQuality;

  public mainItemAllLevel = ItemMVList.equipmentMaxLevel;

  public mainItemAllSkillId: number | null = null;

  // import/export
  public importDialogVisible = false;

  public exportDialogVisible = false;

  public importString = '';

  // equipment
  public showEquipmentInfo = true;

  // data
  public player = new Player();

  public skillChain = 0;

  public enemy = new Enemy();

  // check has player change
  public initPlayer = '';

  // other
  public resetHasChange() {
    this.initPlayer = this.exportString;
  }

  public get hasChange() {
    return this.initPlayer !== this.exportString;
  }

  public get unsavedMessage() {
    return `${this.$t('キャラクター保存されません，ページを離れますか')}？`;
  }

  // item picker
  public get itemPickerItems() {
    return this.itemPickerFilterCategory ? dataManager.itemsByCategory[this.itemPickerFilterCategory] : dataManager.itemsEquipments;
  }

  public get filteredItemPickerItems() {
    const key = JSON.stringify(this.itemPicker);
    if (!this.itemPickerSortCache.has(key)) {
      let items = this.itemPickerItems.filter((p) => (
        (!this.itemPickerFilterCategory || this.itemPickerFilterCategory === p.CATEG)
        && (!this.itemPickerFilterKeyword || p.DF === +this.itemPickerFilterKeyword || p.NAME.toLocaleLowerCase().includes(this.itemPickerFilterKeyword.toLocaleLowerCase()))
        && (!this.itemPickerFilterCharacterGender || p.canGenderUseEquipment(this.itemPickerFilterCharacterGender))
        && (!this.itemPickerFilterWeaponGen.length || this.itemPickerFilterWeaponGen.includes(p.GEN))
        && (!this.itemPickerFilterGroupDf || !p.GROUP_DF || this.itemPickerFilterGroupDf === p.GROUP_DF)
      ));

      if (this.itemPickerSort in dataManager.lookup.state) {
        items = Enumerable.from(items)
          .orderByDescending((p) => p.getState(this.itemPickerSort).total)
          .thenByDescending((p) => p.getStates().reduce((sum, { total }) => sum + total, 0))
          .thenByDescending((p) => p.getElements().reduce((sum, { total }) => sum + total, 0))
          .toArray();
      } else if (this.itemPickerSort in dataManager.lookup.element) {
        items = Enumerable.from(items)
          .orderByDescending((p) => p.getElement(this.itemPickerSort).total)
          .thenByDescending((p) => p.getStates().reduce((sum, { total }) => sum + total, 0))
          .thenByDescending((p) => p.getElements().reduce((sum, { total }) => sum + total, 0))
          .toArray();
      } else if (this.itemPickerSort.replace('_base', '') in dataManager.lookup.state) {
        const state = this.itemPickerSort.replace('_base', '');
        items = Enumerable.from(items)
          .orderByDescending((p) => p.getSupportState(state).value)
          .thenByDescending((p) => p.getSupportStates().reduce((sum, { value }) => sum + value, 0))
          .thenByDescending((p) => p.getSupportElements().reduce((sum, { value }) => sum + value, 0))
          .toArray();
      } else if (this.itemPickerSort.replace('_base', '') in dataManager.lookup.element) {
        const element = this.itemPickerSort.replace('_base', '');
        items = Enumerable.from(items)
          .orderByDescending((p) => Formula.getSupportElement(p.ELM[element]))
          .thenByDescending((p) => p.getSupportStates().reduce((sum, { value }) => sum + value, 0))
          .thenByDescending((p) => p.getSupportElements().reduce((sum, { value }) => sum + value, 0))
          .toArray();
      }
      this.itemPickerSortCache.set(key, items);
    }

    return this.itemPickerSortCache.get(key);
  }

  public onPickItem(item: ItemMVList | null = null) {
    this.itemPickerDialogVisible = false;
    if (this.itemPickerCallback) {
      this.itemPickerCallback(item);
    }
  }

  // support item picker
  public openSupportItemEditDialog() {
    this.resetItemPickerFilter().setDefaultItemPickerFilter();
    this.itemPickerShowRemoveIcon = false;
    this.itemPickerShowStateType = 1;
    this.itemPickerSortOriginal = this.itemPickerSort;
    if (this.itemPickerSort && !this.itemPickerSort.includes('_base') && this.itemPickerSortOption.some((p) => p.value === `${this.itemPickerSort}_base`)) {
      this.itemPickerSort += '_base';
    }
    this.itemPickerCallback = (item) => { this.supportItemSelected = item; };
    this.supportItemEditDialogVisible = true;
  }

  public onCloseSupportItemDialog() {
    if (this.itemPickerSortOriginal) {
      this.itemPickerSort = this.itemPickerSortOriginal;
    }
    this.itemPickerShowStateType = 0;
  }

  public onAddSupportItem() {
    const supportItem = new EquipmentItem(this.supportItemSelected);
    supportItem.modifier.level = this.supportItemAllLevel;
    this.player.supports.push(supportItem);
  }

  public onRemoveSupportItem(i) {
    this.player.supports.splice(i, 1);
  }

  public onSetAllSupportItemLevel() {
    for (const support of this.player.supports) {
      support.modifier.level = this.supportItemAllLevel;
    }
    this.successNotification();
  }

  public async onRemoveAllSupportItem() {
    await this.$confirm(`${this.$t('すべてをクリアしてもよろしいですか')}?`, '', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    });
    this.player.supports = [];
  }

  // main item editor
  public onConfirmSetAllMainItemQuality() {
    for (const modifier of Object.values(this.player.equipmentModifiers)) {
      modifier.quality = this.mainItemAllQuality;
    }
    this.successNotification();
    this.$forceUpdate();
  }

  public onConfirmSetAllMainItemLevel() {
    for (const modifier of Object.values(this.player.equipmentModifiers)) {
      modifier.level = this.mainItemAllLevel;
    }
    this.successNotification();
    this.$forceUpdate();
  }

  public onConfirmSetAllMainItemSkill() {
    for (const modifier of Object.values(this.player.equipmentModifiers)) {
      modifier.skill = dataManager.skillById[this.mainItemAllSkillId];
    }
    this.successNotification();
    this.$forceUpdate();
  }

  // character picker
  public onPickCharacter(character: CharacterMVList | null = null) {
    this.player.character = this.player.characterId === character?.DF ? null : character;
  }

  // equipment
  public get rightEquipments() {
    return [...new Array(3).keys()].map((p) => `accessory${p + 1}`);
  }

  public setEquipmentModifierSkill(skillId: number, slot: string) {
    if (this.player.equipmentModifiers[slot]) {
      this.player.equipmentModifiers[slot].skill = skillId;
    }
  }

  public onPickEquipment(slot: string) {
    return this[`onPick${pascalCase(slot)}`]();
  }

  public getEquipmentImage(slot: string) {
    return this[`${slot}Image`];
  }

  public onPickWeapon() {
    this.resetItemPickerFilter().setDefaultItemPickerFilter();
    this.itemPickerFilterCategory = ECategory.eWEAPON;
    if (this.player.character) {
      this.itemPickerFilterWeaponGen = this.player.character.WEAPON.map((p) => p.GEN).filter((p) => p);
    }
    this.itemPickerCallback = (item) => {
      if (item) {
        if (dataManager.lookup.twoHandledWeaponKind.includes(item.WPN_KIND)) {
          this.player.equipment.shield = null;
        }
        this.player.equipment.weapon ||= new EquipmentItem(item);
        this.player.equipment.weapon.item = item;
      } else {
        this.player.equipment.weapon = null;
      }
    };
    this.itemPickerDialogVisible = true;
  }

  public onPickShield() {
    if (dataManager.lookup.twoHandledWeaponKind.includes(this.player.equipment.weapon?.item.WPN_KIND)) {
      return;
    }
    this.resetItemPickerFilter().setDefaultItemPickerFilter();
    this.itemPickerFilterCategory = ECategory.eSHIELD;
    this.itemPickerCallback = (item) => {
      if (item) {
        this.player.equipment.shield ||= new EquipmentItem(item);
        this.player.equipment.shield.item = item;
      } else {
        this.player.equipment.shield = null;
      }
    };
    this.itemPickerDialogVisible = true;
  }

  public onPickHelmet() {
    this.resetItemPickerFilter().setDefaultItemPickerFilter();
    this.itemPickerFilterCategory = ECategory.eHELM;
    this.itemPickerCallback = (item) => {
      if (item) {
        this.player.equipment.helmet ||= new EquipmentItem(item);
        this.player.equipment.helmet.item = item;
      } else {
        this.player.equipment.helmet = null;
      }
    };
    this.itemPickerDialogVisible = true;
  }

  public onPickArmor() {
    this.resetItemPickerFilter().setDefaultItemPickerFilter();
    this.itemPickerFilterCategory = ECategory.eARMOR;
    this.itemPickerCallback = (item) => {
      if (item) {
        this.player.equipment.armor ||= new EquipmentItem(item);
        this.player.equipment.armor.item = item;
      } else {
        this.player.equipment.armor = null;
      }
    };
    this.itemPickerDialogVisible = true;
  }

  public onPickAccessory(i) {
    this.resetItemPickerFilter().setDefaultItemPickerFilter();
    this.itemPickerFilterCategory = ECategory.eACCESSORY;
    this.itemPickerCallback = (item) => {
      const name = `accessory${i}`;
      if (item) {
        this.player.equipment[name] ||= new EquipmentItem(item);
        this.player.equipment[name].item = item;
      } else {
        this.player.equipment[name] = null;
      }
    };
    this.itemPickerDialogVisible = true;
  }

  public onPickAccessory1() {
    this.onPickAccessory(1);
  }

  public onPickAccessory2() {
    this.onPickAccessory(2);
  }

  public onPickAccessory3() {
    this.onPickAccessory(3);
  }

  public get weaponImage() {
    return this.player.equipment.weapon?.item.icon || 'img/icon/icon_pick_weapon.png';
  }

  public get shieldImage() {
    if (dataManager.lookup.twoHandledWeaponKind.includes(this.player.equipment.weapon?.item.WPN_KIND)) {
      return 'img/icon/icon_pick_shield_disabled.png';
    }
    return this.player.equipment.shield?.item.icon || 'img/icon/icon_pick_shield.png';
  }

  public get helmetImage() {
    return this.player.equipment.helmet?.item.icon || 'img/icon/icon_pick_helmet.png';
  }

  public get armorImage() {
    return this.player.equipment.armor?.item.icon || 'img/icon/icon_pick_armor.png';
  }

  public accessoryImage(i) {
    return this.player.equipment[`accessory${i}`]?.item.icon || 'img/icon/icon_pick_accessory.png';
  }

  public get accessory1Image() {
    return this.accessoryImage(1);
  }

  public get accessory2Image() {
    return this.accessoryImage(2);
  }

  public get accessory3Image() {
    return this.accessoryImage(3);
  }

  // summary
  public getEquipmentState(state: string, slot: string) {
    return this.player.equipment[slot].item.getState(state, this.player.equipmentModifiers[slot].quality, this.player.equipmentModifiers[slot].level, this.player.equipmentModifiers[slot].skill);
  }

  public getEquipmentStates(slot: string) {
    return this.player.equipment[slot].item.getStates(this.player.equipmentModifiers[slot].quality, this.player.equipmentModifiers[slot].level, this.player.equipmentModifiers[slot].skill).filter((p) => p.value || p.skillValue || p.addonValue);
  }

  public getEquipmentElement(element: string, slot: string) {
    return this.player.equipment[slot].item.getElement(element, this.player.equipmentModifiers[slot].quality, this.player.equipmentModifiers[slot].skill);
  }

  public getEquipmentElements(slot: string) {
    return this.player.equipment[slot].item.getElements(this.player.equipmentModifiers[slot].quality, this.player.equipmentModifiers[slot].skill).filter((p) => p.value || p.skillValue || p.addonValue);
  }

  public getEquipmentSkills(slot: string) {
    return this.player.equipment[slot].item.getSkills(this.player.equipmentModifiers[slot].quality)
      .concat(this.player.equipmentModifiers[slot].skill ? [this.player.equipmentModifiers[slot].skill] : []);
  }

  // import / export
  public onImportFromString() {
    const orginalPlayer = this.player;
    if (this.importFromString(this.importString)) {
      this.successNotification();
      this.importDialogVisible = false;
      return;
    }

    // restore if failed to load
    this.player = orginalPlayer;
  }

  public importFromLocalStorage() {
    try {
      const importString = this.$store.getters['characterBuilder/importString'](this.$i18n.locale);
      if (importString) {
        this.importFromString(importString);
      }
    } catch (e) {
      this.$message.error(e.toString());
      console.error(e);
    }
  }

  public importFromQuery() {
    if (this.$route.query.i && this.importFromString(this.$route.query.i)) {
      this.successNotification();
      return true;
    }
    return false;
  }

  public importFromString(str) {
    try {
      const convertor = new PlayerExportVersionConvertor(this.$i18n.locale);
      const playerExport = plainToClass(PlayerExport, convertor.convert(JSON.parse(atob(str))));

      // check does item exists
      for (const [slot, equipment] of playerExport.player.equipments) {
        if (!equipment.item) {
          playerExport.player.equipment[slot] = null;
        }
      }

      this.player = playerExport.player;
      this.enemy = playerExport.enemy || this.enemy;
      this.skillChain = playerExport.skillChain;
      return true;
    } catch (e) {
      this.$message({
        message: this.$t('インポート失敗').toString(),
        type: 'warning',
      });
      setTimeout(() => this.$message({
        message: e.toString(),
        type: 'warning',
      }));
      console.error(e);
      this.player = new Player();
      return false;
    }
  }

  public get exportString() {
    const playerExport = new PlayerExport(this.$i18n.locale, this.player, this.enemy);
    playerExport.skillChain = this.skillChain;
    return btoa(JSON.stringify(playerExport));
  }

  public get exportUrl() {
    return window.location.href.replace(window.location.hash, '') + this.$router.resolve({ name: 'ToolsCharacterBuilder', query: { i: this.exportString } }).href;
  }

  // save
  public onSave() {
    this.$store.commit('characterBuilder/save', {
      locale: this.$i18n.locale,
      importString: this.exportString,
    });
    this.successNotification();
    this.resetHasChange();
  }

  public async onClear() {
    await this.$confirm(`${this.$t('すべてをクリアしてもよろしいですか')}?`, '', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    });
    this.$store.commit('characterBuilder/clear', { locale: this.$i18n.locale });
    this.player = new Player();
    this.skillChain = 0;
    this.successNotification();
    this.resetHasChange();
  }

  // helpers
  public resetItemPickerFilter() {
    this.itemPickerShowRemoveIcon = true;
    this.itemPickerShowSort = true;
    this.itemPickerShowStateType = 0;

    this.itemPickerFilterCategory = null;
    this.itemPickerFilterKeyword = '';
    this.itemPickerFilterCharacterGender = null;
    this.itemPickerFilterWeaponGen = [];
    this.itemPickerFilterGroupDf = null;
    this.itemPickerCallback = null;
    return this;
  }

  public setDefaultItemPickerFilter() {
    if (this.player.character) {
      this.itemPickerFilterCharacterGender = this.player.character.GEN;
      this.itemPickerFilterGroupDf = this.player.character.GROUP_DF;
    }
    return this;
  }

  public beforeMount() {
    this.importFromQuery() || this.importFromLocalStorage();
    this.initPlayer = this.exportString;
  }
}
</script>

<style lang="sass" scoped>
a
  text-decoration: none

.top-container
  height: 100%

/* item picker dialog
.item-picker-items
  display: flex
  flex-wrap: wrap
  text-align: center
  margin-top: 36px

  > div
    width: 140px
    cursor: pointer

    > p
      white-space: nowrap
      text-overflow: ellipsis
      overflow: hidden

.item-picker-remove-item
  padding-top: 12px

/* support item dialog
.support-item-picker
  display: flex
  align-items: center

.support-item-editor-items
  display: flex
  flex-wrap: wrap
  margin-top: 36px

  > div
    align-items: center
    text-align: center
    margin: 24px

/* character editor
.character-edit-dialog
  display: flex

.character-picker
  display: flex
  flex-wrap: wrap
  width: 60%

  > div
    border: 1px solid rgba(0, 0, 0, 0)

  img
    width: 140px
    cursor: pointer

.character-state
  width: 30%

  h3
    text-align: center

.character-image
  width: 100%

.selected-character
  border: 1px solid green !important

.popover
  z-index: 20001

.character-state-popover
  width: 100%

  td
    white-space: nowrap

.character-skill-popover-detail
  width: 400px

/* enemy editor
.enemy-edit-picker
  width: 70%
.enemy-edit
  display: flex
.enemy-edit-enemy
  width: 25%
  h3
    text-align: center
  display: flex
  flex-direction: column
.enemy-edit-enemy__state-table
  width: 200px
/* equipment
.top-equipment-container
  background: rgb(224, 195, 151)
  .filters
    padding: 12px

.equipment-container
  display: flex
  background: rgb(224, 195, 151)

.equipment-icon
  cursor: pointer

.equipment-popover, .character-state-popover, .character-skill-popover
  border: 2px solid green
  color: black
  background: white
  height: auto
  padding: 4px

.equipment-popover > h3
  text-align: center

.skill-addon-select
  width: 240px

.main-equipment-container
  padding: 0 48px
  .main-equipments
    margin-top: 24px
    display: flex
    p
      text-align: center
    img
      width: 120px

/* support equipment
.sub-equipment, .result
  width: 425px
  min-height: 425px
.sub-equipment
  padding-right: 48px

.sub-equipment img
  width: 72px

.sub-equipment-items
  display: flex
  flex-wrap: wrap
  padding-top: 100px
  > div
    margin: 6px

.character-builder-container
  display: flex
  height: 100%

.result
  padding: 48px

.left-equipment > div
  text-align: center
  width: 150px
  height: 150px

.right-equipment
  > div
    text-align: center
    width: 150px
    height: 150px

  margin-top: 80px

th
  text-align: left
  white-space: nowrap
  padding: 4px

td
  padding: 4px

.character
  height: 300px

  > h4
    text-align: center

  img
    width: 240px

/* battle
.battle
  padding: 48px

.enemy
  height: 300px

.enemy__icon
  width: 240px

.player-receive-damage__title
  display: flex
  align-items: center
</style>
