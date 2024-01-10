const refreshPage = () => {
  const iframe = document.querySelector('iframe[src="https://premiobandinspirario.com.br/CATEGORY-PARTICIPANT-NAME/"]');
  // Access the contentDocument of the iframe
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const headerTwo = iframeDocument.querySelector('h2')
  const hasObrigado = headerTwo.textContent.includes('Obrigado!')
  console.log(hasObrigado)
  if (hasObrigado) {
    // window.location.reload()
    // close
    const closeButton = document.querySelector('.sgpb-popup-close-button-3')
    closeButton.click()
    // vote again
    voteFor()
  }
}

const vote = () => {
  // const submit = DocumentFragment.querySelector('input.wpcf7-form-control.has-spinner.wpcf7-submit')
  const iframe = document.querySelector(`iframe[src="https://premiobandinspirario.com.br/CATEGORY-PARTICIPANT-NAME/"]`);

  // Access the contentDocument of the iframe
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  console.log(iframeDocument);
  const submit = iframeDocument.querySelector('form').querySelector('p input')
  submit.click()
  setInterval(refreshPage, "5000")
}

const voteFor = () => {
  const elements = document.querySelectorAll('.elementor-widget-wrap.elementor-element-populated')
  const festival = Array.from(elements).filter(element => element.textContent.includes("[ADD NAME HERE]"))[1]
  const btn = festival.children[festival.children.length - 1]
  btn.click()
  setTimeout(vote, "5000")
}

voteFor()
