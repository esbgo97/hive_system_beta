import { override, fixBabelImports, addLessLoader } from 'customize-cra'

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'ant',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    })
)