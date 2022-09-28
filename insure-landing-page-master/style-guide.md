# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Dark Violet: hsl(256, 26%, 20%)
- Grayish Blue: hsl(216, 30%, 68%)

### Neutral

- Very Dark Violet: hsl(270, 9%, 17%)
- Dark Grayish Violet: hsl(273, 4%, 51%)
- Very Light Gray: hsl(0, 0%, 98%)

## Typography

### Body Copy

- Font size: 16px

### Headings

- Family: [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display)
- Weights: 400

### Body

- Family: [Karla](https://fonts.google.com/specimen/Karla)
- Weights: 400, 700

## Icons

You can use either use the social icons provided or load in a font icon library. Some library suggestions can be found below:

- [Font Awesome](https://fontawesome.com)
- [IcoMoon](https://icomoon.io)
- [Ionicons](https://ionicons.com)



position: fixed;
    left: -100%;
    top: 70px;
    gap: 0;
    flex-direction: column;
    background-color: hsl(256, 26%, 20%);
    background-image: url(./images/bg-pattern-mobile-nav.svg);
    background-position: bottom;
    background-repeat: no-repeat;
    height: 500px;
    width: 375px;
    text-align: center;
    transition: 0.3s;

a{
    display: block;
    margin: auto;
    width: 300px;
    height: 22px;
    padding: 19px 0;
    color: white;
    text-decoration: none;
    font-size: 20px;
    letter-spacing: 2px;
    font-family: 'Karla', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    border: solid 2px hsl(256, 26%, 20%);
}