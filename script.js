function startTyping() {
    const title = document.querySelector('.skills-title');
    const text = "My Skills"; // Текст, который мы хотим напечатать
    let i = 0;

    if (title) {
        title.innerText = ""; // На всякий случай очищаем еще раз
        
        function type() {
            if (i < text.length) {
                title.innerText += text.charAt(i);
                i++;
                setTimeout(type, 150);
            }
        }
        type();
    }
}

// Запускаем через секунду, чтобы всё точно прогрузилось
setTimeout(startTyping, 1000);