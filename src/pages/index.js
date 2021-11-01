import React, { Fragment } from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>

      <section>

        <h2>Design</h2>
        <h3>Develop &amp; Deploy</h3>
        <p>UX Designer and web developer based in NYC</p>

        <div className="accordion">

    <button
        className="accordion__button h5"
        id="acc-button-example-01"
        data-toggle="accordion"
        aria-controls="acc-panel-example-01"
        aria-expanded="false">
            Danaus Plexippus
    </button>

    <div
        className="accordion__panel"
        id="acc-panel-example-01"
        data-accordion="panel"
        aria-labelledby="acc-button-example-01"
        role="region">

        <div className="accordion__panel__content">
            <p>
                The monarch butterfly or simply monarch is a milkweed butterfly in the family Nymphalidae. Other common names, depending on region, include milkweed, common tiger, wanderer, and black veined brown. It may be the most familiar <a href="#1">North American</a> butterfly, and is considered an iconic pollinator species.
            </p>
        </div>

    </div>


</div>
      
      </section>

    </Layout>
  )
}
