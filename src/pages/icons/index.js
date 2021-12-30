import React, { useState } from 'react';

import { Link } from "gatsby";
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import IconLeader from '../../components/supplementary/IconLeader';

import IconSprite from '../../icons/natura11y-icons-sprite.svg';

const Icons = ({ data }) => {

    let ajax;

    if(typeof XMLHttpRequest !== 'undefined') {
        ajax = new XMLHttpRequest();
    }
	
	const appendSprite = () => {
        ajax.open('GET', IconSprite, true);
        ajax.send();
        ajax.onload = () => {
            const div = document.createElement('div');
            div.className = 'natura11y-icons-sprite';
            div.innerHTML = ajax.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
        }
    }

    appendSprite();

    const allIcons = data.allNatura11YiconsYaml.nodes;

    const [displayedIcons, setDisplayedIcons] = useState(allIcons);

    const searchHandler = (event) => {

        const enteredSearch = event.target.value.toLowerCase();
        		
        let filteredIcons = allIcons.filter(icon => {
            return (
                icon.className.toLowerCase().includes(enteredSearch) ||
                icon.tags.toString().includes(enteredSearch)
            );
        });

        enteredSearch !== '' ? 
            setDisplayedIcons(filteredIcons) :
            setDisplayedIcons(allIcons);
    }

    return (

        <Layout>

            <IconLeader />

            <div className="container medium">

                <div class="form-entry margin-y-4">

                    <div class="form-entry__field">

                        <span class="form-entry__field__input">
                            <span class="icon icon-search opacity-50"></span>
                            <input
                                type="text"
                                name="natura11y-icon-search"
                                id="natura11y-icon-search"
                                placeholder="Filter Icons" 
                                onChange={searchHandler}
                            />
                        </span>

                    </div>

                </div>

                <div className="grid gap-1 grid--column-3 grid--column-6--md text-align-center  margin-y-4" id="natura11yIconGrid">

                    {displayedIcons.map(icon => {

                        let name = icon.className;
                        let tags = icon.tags;
                        let svg = icon.svg

                        return (
                            <Link to={`/icons/${name}`}>

                                <div className="aspect-ratio-1x1 display-flex justify-content-center align-items-center border border-radius margin-bottom-1">                                    
                                    <svg className="icon">
                                        <use href={`#${name}`}></use>
                                    </svg>
                                </div>
                        
                                <p className="font-size-sm opacity-70">
                                    {name}
                                </p>

                            </Link>
                        );
                    })}

                </div>

            </div>

        </Layout>
    );
}

export default Icons;

export const query = graphql`
query queryIcons {
    allNatura11YiconsYaml {
        nodes {
          className
          codePoint
          icon
          id
          svgCode {
              body
          }
          tags
          unicode
        }
      }
    }
`;