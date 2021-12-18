import React from 'react';

const CardExample = () => {

    return (
        <div class="card border">

            <div class="card__head border-bottom">
                <p>Tropical flowers</p>
            </div>
        
            <div class="card__body">
                <h2 class="h4">Gustavia superba</h2>
                <p>
                    Gustavia superba is an understory tree that grows in <a href="#1">Central</a> and north-western <a href="#1">South America</a>. Common names include membrillo, sachamango and heaven lotus.
                </p>
            </div>
        
            <div class="card__foot border-top font-size-sm">
                <ul class="nav nav--horizontal justify-content-between">
                    <li>
                        <a href="#1">Secondary Action</a>
                    </li>
                    <li>
                        <a class="button button--outline" href="#1">Primary Action</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CardExample;