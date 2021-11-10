import React from 'react';
import { Link } from "gatsby";
import { graphql } from 'gatsby';

import IconSprite from '../../icons/natura11y-icons-sprite.svg';



import Layout from '../../components/Layout';
import IconLeader from '../../components/supplementary/IconLeader';

const Icons = ({ data }) => {

    const Natura11yIcons = data.allNatura11YiconsYaml.nodes;


    const ajax = new XMLHttpRequest();
	
	const who = () => {
        ajax.open('GET', IconSprite, true);
        ajax.send();
        ajax.onload = () => {
            const div = document.createElement('div');
            div.className = 'natura11y-icons-sprite';
            div.innerHTML = ajax.responseText;
            document.body.insertBefore(div, document.body.childNodes[0]);
        }
    }

    who();


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
                            />
                        </span>

                    </div>

                </div>

                <div className="grid gap-1 grid--column-3 grid--column-6--md text-align-center" id="natura11yIconGrid">

                    {Natura11yIcons.map(icon => {

                        let name = icon.className;
                        let tags = icon.tags;
                        let svg = icon.svg

                        console.log(svg)

                        return (
                            <a href="#1">

                                <div className="aspect-ratio-1x1 display-flex justify-content-center align-items-center border border-radius margin-bottom-1">                                    
                                    <svg className="icon">
                                        <use href={`#${name}`}></use>
                                    </svg>
                                </div>
                        
                                <p className="font-size-sm opacity-70">
                                    {name}
                                </p>

                            </a>
                        );
                    })}

                </div>


            </div>

            <ul>
            </ul>
            
        </Layout>
    );
}

export default Icons;

export const query = graphql`
query MyQuery {
    allNatura11YiconsYaml {
        nodes {
          className
          codePoint
          icon
          id
          svg
          tags
          unicode
        }
      }
    }
`;