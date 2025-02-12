#!/bin/bash
# Kill any running Node processes (be cautious if multiple Node apps run on the same server)
pkill -f "node" || true

