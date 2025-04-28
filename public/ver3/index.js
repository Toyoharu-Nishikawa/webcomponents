    const layoutElem = document.querySelector('my-layout')
    const menu = layoutElem.shadowRoot.querySelector('my-menu')
    const anchorEl = menu.shadowRoot.querySelector('#usage-anchor')
    const menuEl   = menu.shadowRoot.querySelector('#usage-menu')
    anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; })

    const main = layoutElem.shadowRoot.querySelector('my-main')
    const minijscadElem = main.shadowRoot.querySelector('neco-minijscad')
    const screen = minijscadElem.sketch.screen
    const sheet0    = screen.addSheet("sheet0")
    sheet0.addFig("circle",{center:[100,100],radius:50})
    sheet0.addFig("circle",{center:[200,200],radius:50})
    sheet0.addFig("circle",{center:[300,300],radius:50})
    sheet0.addFig("circle",{center:[400,400],radius:50})


    const plotlyBL = main.shadowRoot.querySelector('neco-plotly[name=bottom-left]')
     const  trace1 = {
        x: [0,1,2,3],
        y: [2,3,6,7],
        marker: {size: 8},
        mode: 'lines+markers',
        name: ' apple',
        type: 'scatter',
      }
      const  trace2 = {
        x: [0,1,2,3],
        y: [2,5,10,7],
        marker: {size: 8},
        mode: 'lines+markers',
        name: 'banana',
        type: 'scatter',
      }

      const data = [trace1,trace2]
      const layout = {
        autosize: true,
        title: '',
        xaxis: {
          autorange: true,
          type: 'linear'
        },
        yaxis: {
          autorange: true,
          type: 'linear'
        }
      }
      plotlyBL.react(data,layout)

