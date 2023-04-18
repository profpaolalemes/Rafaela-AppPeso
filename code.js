function pesoMercurio() {
  return (getNumber("caixa_texto1") * 0.3);
}
function pesoVenus() {
  return (getNumber("caixa_texto1") * 0.88);
}
function pesoMarte() {
  return (getNumber("caixa_texto1") * 0.38);
}
function pesoJupiter() {
  return (getNumber("caixa_texto1") * 1.15);
}
function pesoSaturno() {
  return (getNumber("caixa_texto1") * 2.64);
}
function pesoUrano() {
  return (getNumber("caixa_texto1") * 1.18);
}
function pesoNetuno() {
  return (getNumber("caixa_texto1") * 1.17);
}
onEvent("caixa_texto1", "input", function( ) {
  setText("labelJupiter", Math.round(pesoJupiter()));
  setText("labelMarte", Math.round(pesoMarte()));
  setText("labelMercúrio", Math.round(pesoMercurio()));
  setText("labelNetuno", Math.round(pesoNetuno()));
  setText("labelSaturno",Math.round(pesoSaturno()));
  setText("labelUrano",Math.round(pesoUrano()));
  setText("labelVenus",Math.round(pesoVenus()));
});
