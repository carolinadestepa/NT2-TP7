import Vue from 'vue'
import VueForm from "vue-form"
// para validar que no haya espacios, ni numeros dentro del input que contenga esta validaciones
var options = {
    validators: {
        'no-espacios': function(value) {
            return !value.includes(' ')
        },
        'no-numero': function(value) {
                 var regex = /\d/g;
                return !regex.test(value);
                    
        }
           
        
    }
}

Vue.use(VueForm, options)