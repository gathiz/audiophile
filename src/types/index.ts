export type Product = {
    id: number;
    slug: string;
    name: string;
    cart: {
        name: string;
        icon: string;
    }
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
    category: string;
    categoryImage: CategoryImage;
    new: boolean;
    price: number;
    description: string;
    featuresOne: string;
    featuresTwo: string;
    includes: Include[]
    gallery: Gallery
    others: Other[]
}

export type CategoryImage = {
    mobile: string;
    tablet: string;
    desktop: string;
}

export type Include = {
    quantity: number;
    item: string;
}

export type Other = {
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
}

export type Gallery = {
    first: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
    second: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
    third: {
        mobile: string;
        tablet: string;
        desktop: string;
    }
}

export type Category = {
    mod?: string;
    className?: string;
}

export type SlugProps = {
    slug: string;
}

export type CartRowItem = {
    slug: string;
    price: number;
    quantity: number;
}

export type CartProps = {
    cart: CartRowItem[]
}

export interface CheckoutData {
    email: string,
    name: string,
    phone: string,
    address: string,
    zip: string,
    city: string,
    state: string,
    method: string,
    moneyNumber?: number,
    pin?: number
}