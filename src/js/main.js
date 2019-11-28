(function(){
    let ToggleDarkMode = {
        dark(event){
            document.body.classList.toggle("body--night-mode");
            document.querySelector(".tumbler").classList.toggle("tumbler--night-mode");

            let posts = document.querySelectorAll(".post");
            for (let post of posts){
                post.classList.toggle(".post--night-mode");
            }
        },
        init() {
            document.documentElement.classList.add("js-enabled");
            this.button = document.querySelector(".tumbler__wrapper");
            this.button.addEventListener("click", (event)=>{
                this.dark(event);
            });
        }
    };
    ToggleDarkMode.init();
})();
