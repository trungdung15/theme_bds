$(document).ready(function () {
    var placeholderTexts = [
      "Dự án Vinhome Ocean Park",
      "Đường Láng",
      "Dự án Đồi Rồng Đồ Sơn"
    ];
    var inputElement = $('#input-search-mobile');
    var currentIndex = 0;
    var typingSpeed = 120;
  
    var pauseDuration = 2000;
  
    function typePlaceholder() {
      var currentText = placeholderTexts[currentIndex];
      var placeholderLength = currentText.length;
      var currentCharIndex = 0;
  
      function typeCharacter() {
        inputElement.attr('placeholder', currentText.substr(0, currentCharIndex));
        currentCharIndex++;
  
        if (currentCharIndex <= placeholderLength) {
          setTimeout(typeCharacter, typingSpeed);
        } else {
          setTimeout(function() {
            currentIndex++;
            if (currentIndex >= placeholderTexts.length) {
              currentIndex = 0;
            }
            typePlaceholder();
          }, pauseDuration);
        }
      }
  
      typeCharacter();
    }
  
    typePlaceholder();
});