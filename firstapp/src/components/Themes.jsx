import React from 'react';

const Themes = ({settheme}) => {
    return (
        <>
        <select onChange={(e)=>settheme(e.target.value)}>
    <option>default</option>
    <option>3024-day</option>
    <option>3024-night</option>
    <option>abcdef</option>
    <option>ambiance</option>
    <option>ayu-dark</option>
    <option>ayu-mirage</option>
    <option>base16-dark</option>
    <option>base16-light</option>
    <option>bespin</option>
    <option>blackboard</option>
    <option>cobalt</option>
    <option>colorforth</option>
    <option>darcula</option>
    <option selected>dracula</option>
    <option>duotone-dark</option>
    <option>duotone-light</option>
    <option>eclipse</option>
    <option>elegant</option>
    <option>erlang-dark</option>
    <option>gruvbox-dark</option>
    <option>hopscotch</option>
    <option>icecoder</option>
    <option>idea</option>
    <option>isotope</option>
    <option>lesser-dark</option>
    <option>liquibyte</option>
    <option>lucario</option>
    <option>material</option>
    <option>material-darker</option>
</select>   
        </>
    );
}

export default Themes;
