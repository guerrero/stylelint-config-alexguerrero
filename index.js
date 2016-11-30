// Alex Guerrero

'use strict'

module.exports = {
  rules: {
    // General
    'indentation': 2,
    'max-empty-lines': 2,
    'max-line-length': 80,
    'max-nesting-depth': 3,
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-indistinguishable-colors': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'no-unsupported-browser-features': [true, {
      browsers: 'last 2 versions, ie >=10'
    }],

    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'always-where-possible',
    'color-no-invalid-hex': true,

    // Fonts
    'font-family-name-quotes': 'always-where-required',
    'font-family-no-duplicate-names': true,
    'font-weight-notation': 'named-where-possible',

    // Function
    'function-blacklist': [],
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always',
    'function-comma-space-before': 'never',

    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-space-inside': 'never',
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'never',
    'function-url-scheme-whitelist': ['https', 'data', 'http'],
    'function-whitespace-after': 'always',

    // Numbers
    'number-leading-zero': 'always',
    'number-max-precision': 4,
    'number-no-trailing-zeros': true,

    // Strings
    'string-no-newline': true,
    'string-quotes': 'single',

    // Time
    'time-no-imperceptible': true,

    // Units
    'length-zero-no-unit': true,
    'unit-blacklist': [],
    'unit-case': 'lower',
    'unit-no-unknown': true,

    // Values
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true,
    'value-list-comma-space-after': 'always',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // Shorthand property
    'shorthand-property-no-redundant-values': true,

    // Properties
    'property-blacklist': [],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,

    // Declaration
    'keyframe-declaration-no-important': true,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-property-unit-blacklist': {},
    'declaration-property-value-blacklist': {},

    // Declaration block
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-ignored-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else']
    }],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': 'never',
    'block-closing-brace-space-before': 'never',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-after': 'never',
    'block-opening-brace-space-before': 'always',

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-blacklist': [],
    'selector-attribute-operator-space-after': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': ['^[a-z]+(-[a-z]+|)+$', {
      resolveNestedSelectors: true
    }],
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': '^[a-z]+(-[a-z]+|)+$',
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '1,2,1',
    'selector-no-empty': true,
    'selector-pseudo-class-blacklist': [],
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'single',
    'selector-pseudo-element-no-unknown': true,
    'selector-root-no-composition': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'selector-max-empty-lines': 0,

    // Selector list
    'selector-list-comma-newline-after': 'always-multi-line',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',

    // Root rule
    'root-no-standard-properties': true,

    // Rule
    'rule-non-nested-empty-line-before': 'always',

    // Media feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    // 'media-feature-name-blacklist': [],
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-no-missing-punctuation': true,
    'media-feature-parentheses-space-inside': 'never',

    // Custom media
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',

    // At-rule
    'at-rule-blacklist': [],
    'at-rule-empty-line-before': 'always',
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': true,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',

    // Stylelint
    'stylelint-disable-reason': 'always-before',

    // Comments
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-blacklist': []
  }
}
