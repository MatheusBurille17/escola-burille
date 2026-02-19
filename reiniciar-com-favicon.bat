@echo off
echo ========================================
echo  Reiniciando Next.js com Favicon
echo ========================================
echo.

echo [1/4] Parando servidor...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul

echo [2/4] Limpando cache do Next.js...
if exist .next rmdir /s /q .next
echo Cache limpo!

echo [3/4] Verificando arquivos de favicon...
if exist src\app\favicon.ico (
    echo   ✓ favicon.ico encontrado
) else (
    echo   ✗ favicon.ico NAO encontrado!
)

if exist src\app\icon.png (
    echo   ✓ icon.png encontrado
) else (
    echo   ✗ icon.png NAO encontrado!
)

if exist src\app\apple-icon.png (
    echo   ✓ apple-icon.png encontrado
) else (
    echo   ✗ apple-icon.png NAO encontrado!
)

echo.
echo [4/4] Iniciando servidor...
echo.
echo ========================================
echo  Servidor iniciando...
echo  Acesse: http://localhost:3000
echo ========================================
echo.
echo IMPORTANTE:
echo 1. Limpe o cache do navegador (Ctrl+Shift+Delete)
echo 2. Ou abra em aba anonima (Ctrl+Shift+N)
echo 3. Acesse http://localhost:3000
echo.

npm run dev
