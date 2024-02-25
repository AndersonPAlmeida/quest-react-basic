export function ButtonInformation({ text = ''}) {
  function learnLabel() {
    alert(`A label desse botão é: ${text}`);
  }

  return (
    <button label={text} onClick={learnLabel}>Saiba Mais !!!</button>
  )
}