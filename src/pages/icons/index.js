import React, { Fragment, useState } from 'react';

import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Seo from '../../components/Seo';

import IconLeader from '../../components/supplementary/IconLeader';

const Icons = ({ data }) => {
    
    const allIcons = data.allNatura11YiconsYaml.nodes;

    const [displayedIcons, setDisplayedIcons] = useState(allIcons);
    const [enteredSearch, setEnteredSearch] = useState('');
    const [noResults, setNoResults] = useState(false);

    const searchHandler = (event) => {

        setEnteredSearch(event.target.value);

        const enteredSearchLowercase = enteredSearch.toLowerCase();

        let filteredIcons = allIcons.filter(icon => {
            return (
                icon.className.toLowerCase().includes(enteredSearchLowercase) ||
                icon.tags.toString().includes(enteredSearchLowercase)
            );
        });

        console.log(filteredIcons.length, noResults);

        enteredSearchLowercase !== '' ? 
            setDisplayedIcons(filteredIcons) :
            setDisplayedIcons(allIcons);

       filteredIcons.length === 0 ?
            setNoResults(true) :
            setNoResults(false);

    }

    const iconList = displayedIcons.map((icon, index) => {

        let name = icon.className;
        let tags = icon.tags;
        let svg = icon.svg

        return (
            <Link to={`/icons/${name}`} key={`${icon}_${index}`}>

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
    })

    return (
        <Fragment>

            <Seo title="Icons" />
            
            <Header />

            <IconLeader />

            <div className="container medium">

                <div className="form-entry margin-y-4">

                    <div className="form-entry__field">

                        <span className="form-entry__field__input">
                            <span className="icon icon-search opacity-50"></span>
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

                <div className="text-align-center margin-y-4">

                {noResults ? (

                    <div className="container narrow text-align-center">

                        <p className="h2 code-font" aria-hidden="true">
                            .__.<br />
                            &#123;O,o&#125;<br />
                            /&#41;__&#41;<br />
                            " "<span style={{'opacity': '0'}}>c</span>
                        </p>

                        <p className='h6'>No icons found for '{enteredSearch}'</p>

                    </div>
                    
                ) : (

                    <div className="grid grid--column-3 grid--column-6--md gap-1" id="natura11yIconGrid">

                        {iconList}

                    </div>
                )}
                
                </div>

            </div>

            <Footer />

        </Fragment>
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