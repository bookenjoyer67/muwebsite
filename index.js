var language = navigator.language || navigator.userLanguage; 
language = language.substring( 0, 2 );
 if (language == "en"){  
window.location.href = "en/index.html";  // Engligh
} 
else if (language == "es"){  
window.location.href = "es/index.html";  // Spanish
} 
else {  
window.location.href = "index.html";  // everyone else
}
