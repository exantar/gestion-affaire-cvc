@echo off
cd /d "%~dp0"
echo Site Gestion d'affaire CVC
echo.
echo Adresse tablette :
echo http://192.168.1.202:8080/index.html
echo.
echo Laisse cette fenetre ouverte tant que tu utilises le site sur tablette.
echo Si Windows demande une autorisation reseau pour Python, accepte sur reseau prive.
echo.
"C:\Users\axelf\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe" -m http.server 8080 --bind 0.0.0.0
pause
