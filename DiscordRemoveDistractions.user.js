// ==UserScript==
// @name         Discord Remove Distractions
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Remove all the Discord distractions to get concentrated on what's really important
// @author       GabryB03
// @match        https://www.discord.com/*
// @match        https://discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @updateURL    https://github.com/GabryB03/Remove-Discord-Distractions/raw/main/RemoveDiscordDistractions.user.js
// @downloadURL  https://github.com/GabryB03/Remove-Discord-Distractions/raw/main/RemoveDiscordDistractions.user.js
// @grant        none
// ==/UserScript==

(function()
{
    'use strict';

    function asyncLoop()
    {
        try
        {
            var distractingElements = ["a[href='/store']", "a[href='/shop']", "a[href='/channels/@me']"];

            for (var i = 0; i < distractingElements.length; i++)
            {
                var distractingElement = document.querySelector(distractingElements[i]);

                if (distractingElement != null && distractingElement != undefined)
                {
                    distractingElement.remove();
                }
            }

            var distractingClasses = ["guilds__2b93a", "searchBar_e4ea2a", "container__5c7e7", "toolbar__88c63"];

            for (var j = 0; j < distractingClasses.length; j++)
            {
                var distractingClass = document.getElementsByClassName(distractingClasses[j])[0];

                if (distractingClass != null && distractingClass != undefined)
                {
                    distractingClass.remove();
                }
            }
        }
        catch (e)
        {

        }

        setTimeout(async function()
        {
            await asyncLoop();
        },
        500);
    }

    asyncLoop();
})();