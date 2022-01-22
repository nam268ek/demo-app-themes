# Preview website demo use react and more

![demo-app-themes](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642691523/Screenshot_from_2022-01-20_22-10-24_gfgf60.png)

### Visit website to see demo: [demo-app-themes.netlify.app](https://demo-app-themes.netlify.app/)

# Some features

## 1. Login, Logout and Register

> Demo use account:

```javascript
    email: nam.nguyen@demo.app.com
    password: 131313
```

> The form uses the `react-hook-form`, `formik` and `Yup` packages to handle input validation.

![login](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642694665/Screenshot_from_2022-01-20_23-04-04_oykeh8.png)

> Register page

![register](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642695071/Screenshot_from_2022-01-20_23-10-52_ppdwoo.png)

## 2. Buy product

> Maximum purchase limit of `10` products
> after clicking 'Buy now' it will redirect you to the shopping cart.

![by-product](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642692477/Screenshot_from_2022-01-20_22-27-24_qpm6xb.png)

## 3. Add product to cart

> After clicking 'Add to cart' it will add product to cart and maximum `10` products can be added.

![add-product](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642693936/Screenshot_from_2022-01-20_22-51-41_dxukny.png)

## 4. Increase, Decrease, Remove the number of products

> `Increase` or `decrease` the maximum number of products by `10` for each product.
> `delete` the product, `enter the desired quantity` of the product.

![increase-decrease-remove](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642697373/chrome-capture_djp5ba.gif)

## 5. Checkout product

> Product payment via `stripe`, use `webhook` to listen to the payment event sent to the server for processing. Requires `login`

![checkout](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642870619/checkout_oeojov.gif)

## 6. Edit user infomation
> Edit `first name`, `last name`, `email`, `password` and upload file `avatar`

![avatar](https://res.cloudinary.com/ds6y4vgjb/image/upload/v1642872311/edit_user_al2dwa.gif)