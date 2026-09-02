export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html/vue'],
  ignoreFiles: ['dist/**', '.output/**', '.nuxt/**', 'node_modules/**'],
  rules: {
    'custom-media-pattern': null,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'media-feature-range-notation': null,
    'nesting-selector-no-missing-scoping-root': null,
    'no-descending-specificity': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'property-no-vendor-prefix': null,
    'selector-pseudo-class-no-unknown': [
      true,
      { ignorePseudoClasses: ['deep'] }
    ]
  }
}
