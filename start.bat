@echo off
echo Starting Mindora project...

:: Check if node_modules exists
if not exist "project\node_modules" (
    echo Installing dependencies...
    cd project
    npm install
    cd ..
)

:: Start the development server
cd project
npm run dev 