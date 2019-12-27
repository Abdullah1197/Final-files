import axios from axios;
import { key, proxy } from '../config';


export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe () {
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/get?key=${key}&Id=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.indrediants = res.data.recipe.indrediants;

        } catch (error) {
            console.log(error);
            alert('Something went wrong :(');
        }
    }
    calTime() {
        // assuiming that we need 15 min for each 3 ingrediants
        const numIng = this.indrediants.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calServings() {
        this.servings = 4;
    }

    parseIngrediants() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounce', 'ounces', 'teaspoon', 'teaspoons', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g'];
       
        const newIngrediants = this.indrediants.map(el => {
            // 1) Uniform unitss
            let indrediant = el.toLowerCase();
            unitsLong.forEach((unit, i) => {
                indrediant = indrediant.replace(unit, unitsShort[i]);
            });    

            // 2) Remove Parentheses
            indrediant = indrediant.replace(/ *\([^)]*\) */g, ' '); // to remove from parentheses from the words

            // 3) Parse ingredients into count, unit and ingredient
            const arrIng = indrediant.split(' ');
            const unitIndex= arrIng.findIndex(el2 => units.includes(el2));

            let objIng;
            if(unitIndex > -1) {
                // There is a unit
                // ex 4 1/2 cups, arrCount is [4, 1/2] --> eval("4+1/2") --> 4.5
                // ex 4 cups, arrCount is [4]
                const arrCount = arrIng.slice(0, unitIndex);

                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    indrediant: arrIng.slice(unitIndex + 1).join(' ')
                };

            } else if (parseInt(arrIng[0], 10)) {
                // There is NO unit, but 1st element is number
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    indrediant: arrIng.slice(1).join(' ') 
                }
            } else if (unitIndex === -1) {
                // There is NO unit and NO number in 1st position
                objIng = {
                    count: 1,
                    unit: '',
                    indrediant
                }
            }
            return objIng;
        });
        this.inggrediants = newIngrediants
    }

    updateServings (type) {
        // Servings
        const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

        // Ingredients
        this.indrediants.forEach(ing => {
            ing.count *= (newServings / this.servings);
        });
        this.servings = newServings;
    }
}