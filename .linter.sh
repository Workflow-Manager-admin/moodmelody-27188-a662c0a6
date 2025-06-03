#!/bin/bash
cd /home/kavia/workspace/code-generation/moodmelody-27188-a662c0a6/moodmelody
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

