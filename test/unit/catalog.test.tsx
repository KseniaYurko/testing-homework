import React from 'react'
import axios from 'axios'
import mockProducts from '../helpers/mocks/mockProductsAxios';
import renderTestApp from '../helpers/renderTestApp';
import '@testing-library/jest-dom'
import { queryAllByTestId, waitFor } from '@testing-library/react';
import { CartState, Product } from "../../src/common/types";
import { commerce } from "faker";
import {screen} from '@testing-library/dom'


function initProducts(): Product[] {
    const products: Product[] = []

    for(let id = 0; id < 10; id++) {
        products.push({
            id,
            name: `${commerce.productAdjective()} ${commerce.product()}`,
            description: commerce.productDescription(),
            price: Number(commerce.price()),
            color: commerce.color(),
            material: commerce.productMaterial(),
        });
    }

    return products;
}

// jest.mock('axios');

describe('Тестирование требований каталога', () => {
    test('Каталог должен отображать данные с сервера', () => {
        const products = initProducts();
        console.log(products);

        renderTestApp({ initialRoute: "/catalog" });

        for(const product of products){
            const productIdExist = screen.queryAllByTestId(product.id)
            expect(productIdExist).not.toBe([]);
        }

    })




    // test('Каталог должен отображать данные с сервера', async () => {
    //     const response = mockProducts;
    //     // console.log(response);

    //     (axios.get as jest.Mock).mockResolvedValue(response);
    //     const { getAllByTestId } = renderTestApp({ initialRoute: "/catalog" });

    //     await waitFor(() => {
    //         expect(axios.get as jest.Mock).toBeCalled();
    //         for(const dataEl of response.data){
    //             const item = getAllByTestId(`${dataEl.id}`);
    //             expect(item.length).toBe(2);
    //             item.forEach((el) => {
    //                 expect(el).toBeInTheDocument();
    //             });
    //         }
    //     })
    // });

    // test('Для каждого товара в каталоге отображается название, цена и ссылка на страницу с подробной информацией о товаре', async () => {
    //     const response = mockProducts;

    //     (axios.get as jest.Mock).mockResolvedValue(response);
    //     const { getAllByTestId } = renderTestApp({ initialRoute: "/catalog" });
    //     console.log(getAllByTestId);

    //     response.data.forEach(async (value) => {
    //         const item = await getAllByTestId(`${value.id}`);
    //         expect(item).toBeInTheDocument();

    //         // const name = item.querySelector('.ProductItem-Name');
    //         // const price = item.querySelector('.ProductItem-Price');
    //         // const link = item.querySelector('.ProductItem-DetailsLick');

    //         // expect(name).toHaveTextContent(value.name);
    //         // expect(price).toHaveTextContent(`${value.price}`);
    //         // expect(link).toHaveAttribute("href", `/catalog/${value.id}`);
    //     });
    // });




});