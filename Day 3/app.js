const inputs = document.querySelectorAll('.controls input')
    
function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // get the suffix or '' if there's not a sizing data attribute
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}

inputs.forEach(input => input.addEventListener('input', handleUpdate))