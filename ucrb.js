const ucrb = {
    classes: [],

    names: [],

    main: function(){
        const queryConst = "input[type='radio']";
        let queryStr = "";
        this.classes.forEach(classStr =>{
            if(queryStr){
                queryStr += ","
            }
            queryStr += queryConst + "[class='" + classStr + "']"
        });
        this.names.forEach(nameStr =>{
            if(queryStr){
                queryStr += ","
            }
            queryStr += queryConst + "[name='" + nameStr + "']"
        });
        if(!queryStr){
            queryStr = queryConst;
        }

        const radioButtons = document.querySelectorAll(queryStr);

        const uncheckRadioButton = (target) => {
            setTimeout(func =()=>{
                target.checked = false;
            },0)
        }

        radioButtons.forEach(radioButton => {
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
        });
    },

    addClass: function(classStr){
        this.classes.push(classStr);
    },

    addName: function(nameStr){
        this.names.push(nameStr);
    }
}

window.onload =()=> {
    ucrb.main();
}