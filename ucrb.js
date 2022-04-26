const ucrb = {
    classes: [],

    names: [],

    main: function(){
        const queryConst = "input[type='radio']";
        let queryStr = "";
        for(let i=0;i<this.classes.length;i++){
            if(queryStr){
                queryStr += ","
            }
            queryStr += queryConst + "[class='" + this.classes[i] + "']"
        }
        for(let i=0;i<this.names.length;i++){
            if(queryStr){
                queryStr += ","
            }
            queryStr += queryConst + "[name='" + this.names[i] + "']"
        }
        if(!queryStr){
            queryStr = queryConst;
        }

        const radioButtons = document.querySelectorAll(queryStr);

        const uncheckRadioButton = (target) => {
            setTimeout(func =()=>{
                target.checked = false;
            },0)
        }

        for(let i=0;i<radioButtons.length;i++){
            let radioButton = radioButtons[i]
            let label = document.querySelector('label[for="' + radioButton.id + '"]')

            radioButton.addEventListener("mouseup", func=()=>{
                if(radioButton.checked){
                    uncheckRadioButton(radioButton)
                }
            });

            if(label){
                label.addEventListener("mouseup", func=()=>{
                    if(radioButton.checked){
                        uncheckRadioButton(radioButton)
                    }
                });
            }
        }
    },

    addClass: function(classStr){
        this.classes.push(classStr);
    },

    addName: function(nameStr){
        this.names.push(nameStr);
    }
}

window.addEventListener("load", func=()=>{
    ucrb.main();
});