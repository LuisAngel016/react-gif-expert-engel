import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Dragon Ball' ]);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);

        if ( categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);

        // *? categories.push('Caballeros del Zodiaco'); --- tratar de no usarlo lo más posible
        // setCategories( cat => [ ...cat, 'Caballeros del Zodiaco']);

    }

    return (
        <> 
            { /* Titulo */ }
            <h1>GifExpertApp</h1>


            { /* Input */ }
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ (value) => onAddCategory(value) }
            />



            { /* Listado de Gif */ }
            { 
                categories.map( (category) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } 
                    />
                ))
                    // return (<li key={ category }>{ category }</li>)
            }
            {/* <li>ABC</li> */}

            { /* Gif item */ }



        </>   
    )
}