#!/bin/bash

find dist -iregex '.*\.\(css\|js\|json\|fbx\|txt\|html\|ico\)$' -exec brotli -9 {} \;