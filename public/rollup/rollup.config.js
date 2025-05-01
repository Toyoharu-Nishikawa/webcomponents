import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
//import { importMapsPlugin } from '@web/dev-server-import-maps';
import { rollupImportMapPlugin } from "rollup-plugin-import-map";

export default {
  input: 'index.html',
  output: { dir: 'dist' },
  plugins: [
    html({minify:false}),
    rollupImportMapPlugin([
       {
         "imports": {
             "neco-components/": "/neco-components/scripts/neco-components/",
             "@/": "./",
             "node_modules/": "./node_modules/"
         },
         transformingReport: '-',
       },
    ]),
  ],
};
//    importMapsPlugin({
//      inject: {
//        importMap: {
//          imports: {
//            "neco-components/": "/neco-components/scripts/neco-components/",
//            "@/": "./",
//            "node_modules/": "./node_modules/" 
//          },
//        },
//      },
