// ==UserScript==
// @name        BrainrotBlocker
// @namespace   brainrot-filter
// @icon        data:image/png;base64,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
// @version     1.0.0
//
// @match       https://*/*
// @grant       none
// @run-at      document-start
//
// @author      Oxyru
// @description Blocks most brainrot content
// ==/UserScript==

(() => {
    'use strict';

    const BRAINROT = /\bbrainrot\b/i;

    const MAX_DEPTH = 6;

    const NEVER_REMOVE = new Set([
        'HTML',
        'BODY',
        'MAIN',
        'HEADER',
        'FOOTER',
        'NAV'
    ]);

    function getScore(element, depth) {
        let score = 0;

        const text = element.textContent || '';
        const rect = element.getBoundingClientRect();

        score -= depth * 2;

        if (element.children.length >= 2) score += 10;
        if (element.children.length >= 3) score += 5;

        if (element.querySelector('img')) {
            score += 25;
        }

        if (element.querySelector('a')) {
            score += 10;
        }

        if (element.querySelector('button')) {
            score += 5;
        }

        const area = rect.width * rect.height;

        if (area > 10_000 && area < 2_000_000) {
            score += 15;
        }

        if (area > 5_000_000) {
            score -= 100;
        }

        if (text.length > 10_000) {
            score -= 50;
        }

        return score;
    }

    function findBestContainer(start) {
        let current = start;
        let best = null;
        let bestScore = -Infinity;

        for (let depth = 0; current && depth <= MAX_DEPTH; depth++) {

            if (!(current instanceof Element)) break;

            if (NEVER_REMOVE.has(current.tagName)) {
                break;
            }

            const validContainer =
                current.matches('div, article, section, li');

            if (validContainer) {
                const score = getScore(current, depth);

                if (score > bestScore) {
                    bestScore = score;
                    best = current;
                }
            }

            current = current.parentElement;
        }

        return best;
    }

    function removeBrainrot(element) {
        if (!element) return;

        const container = findBestContainer(element);

        if (!container) return;

        console.log(
            '[Brainrot Filter] Suppression :',
            container
        );

        container.remove();
    }

    function scanElement(root) {
        if (!(root instanceof Element)) return;

        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT
        );

        const matches = [];

        let node;

        while (node = walker.nextNode()) {
                matches.push(node);
            }
        }

        for (const textNode of matches) {
            removeBrainrot(textNode.parentElement);
        }
    }

    function initialScan() {
        scanElement(document.body);
    }

    const observer = new MutationObserver(mutations => {

        for (const mutation of mutations) {

            for (const node of mutation.addedNodes) {

                if (node.nodeType === Node.TEXT_NODE) {

                        removeBrainrot(node.parentElement);
                    }

                } else if (node.nodeType === Node.ELEMENT_NODE) {

                    scanElement(node);
                }
            }
        }
    });

    function start() {

        if (!document.body) {
            requestAnimationFrame(start);
            return;
        }

        initialScan();

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    start();

})();
