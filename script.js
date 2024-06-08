        // Contact
        let user = {
            name: 'nonmle',
            contact: {
              email: 'nonmle@duck.com'
            }
          }
          console.log(user)
    

        // Stop Click
        document.addEventListener('contextmenu', e => e.preventDefault());
    
        const elements = document.querySelectorAll('.disable-left-click');
        elements.forEach(element => element.addEventListener('click', e => e.preventDefault()));

        // Switch Tabs Messeage
    function titleModified() {
        window.alert("Title modifed");
    }

    var title = document.title;
    var blurMessage = [
      "Please come back!", 
      "Bitte komm zurück!"
    ];

    var intervalTimer = null;
    var timeoutTimer = null;

    window.addEventListener("blur", function () { 
       intervalTimer = setInterval(function() {
         var rand = Math.floor((Math.random() * blurMessage.length));
         document.title = blurMessage[rand];
         timeoutTimer = setTimeout(function() {
           document.title = title;
         },4000);
       },12000);
    });

    window.addEventListener("focus", function(){ 
      clearInterval(intervalTimer);
      clearTimeout(timeoutTimer);
      document.title = title; 
    });

          
    // Toggle Menu
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById('mobile-menu-icon-open').addEventListener('click', toggleMobileMenu);
        document.getElementById('mobile-menu-icon-close').addEventListener('click', toggleMobileMenu);
       //  document.getElementById('mobile-menu').addEventListener('click', toggleMobileMenu);

        function toggleMobileMenu() {
            var mobileMenu = document.getElementById('mobile-menu');
            var isOpen = mobileMenu.style.display === 'block';

            mobileMenu.style.display = isOpen ? 'none' : 'block';
            document.getElementById('mobile-menu-icon-open').style.display = isOpen ? 'block' : 'none';
            document.getElementById('mobile-menu-icon-close').style.display = isOpen ? 'none' : 'block';
            document.getElementById('mobile-menu').style.display = isOpen ? 'none' : 'block';
        

            if (isOpen) {
            document.body.classList.remove('no-scroll');
            } else {
            document.body.classList.add('no-scroll');
            }
        }
    });

    // Theme
    document.addEventListener('DOMContentLoaded', function() {
      const themeToggleButton = document.getElementById('theme-toggle');
      const currentTheme = localStorage.getItem('theme');

      if (currentTheme) {
          document.documentElement.classList.add(currentTheme);
      }

      themeToggleButton.addEventListener('click', function() {
          document.documentElement.classList.toggle('dark-mode');
          let theme = 'light-mode';
          if (document.documentElement.classList.contains('dark-mode')) {
              theme = 'dark-mode';
          }
          localStorage.setItem('theme', theme);
      });
    });

    $("a.no_link").removeAttr("href"); 