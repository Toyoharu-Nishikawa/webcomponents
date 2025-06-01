import { defineConfig } from 'vite'
import {viteSingleFile} from 'vite-plugin-singlefile'
const randomValue = ()=> `"component-${Math.random().toString(36).slice(2, 10)}"`

// import.meta.url を置換するプラグイン
const replaceImportMetaUrl = ()=> {
  return {
    name: 'replace-import-meta-url',
    transform(code, id) {
      return {
        code: code.replace('import.meta.url.split("/")?.slice(3,-1)?.join("-")', randomValue()),
        map: null
      };
    }
  };
}


export default defineConfig({
  plugins: [
    replaceImportMetaUrl(),
    viteSingleFile()
  ],
  resolve: {
    alias: {
//      "neco-components/": "https://www.necosystem.com/neco-components/scripts/neco-components/",
      "neco-components/": "../../../neco-components/public/scripts/neco-components/",
      "@/": "./",
      "node_modules/": "./node_modules/"
    }
  },
  build: {
   outDir: 'dist', // ビルド出力ディレクトリ
   emptyOutDir: true, // ビルド出力ディレクトリを空にする
    target: 'esnext',
    assetsInlineLimit: Infinity,
  }
})
