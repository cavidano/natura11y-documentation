import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Examples = () => {
    return (
        <Layout>

            <section className="container narrow margin-y-4 text-align-center">
                <h2>
                    Full layouts for another way to get started.
                </h2>
                <p>
                    The templates below are built using Natura11y. Use them as they are or cherry pick the parts you want.
                </p>
            </section>

            <hr />

            <section className='container medium margin-y-5'>

                <div className="grid grid--column-2">

                    <StaticImage
                        src="../images/examples/template-example-01.jpg"
                        alt=""
                        placeholder="dominantColor"
                        layout="fullWidth"
                    />

                    <div className="subtle-fill padding-4">

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quos velit doloremque aliquam? Asperiores pariatur eligendi ratione mollitia quod dicta?
                    </p>


                    </div>

                </div>

            </section>

        </Layout>
    )
}

export default Examples;
