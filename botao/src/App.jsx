import ShinyText from './components/ShinyText/ShinyText'
function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>
<ShinyText
  text="✨ Shiny Text Effect"
  speed={2}
  delay={0}
  color="#b5b5b5"
  shineColor="#ffffff"
  spread={120}
  direction="left"
  yoyo={false}
  pauseOnHover={false}
  disabled={false}
/>
</div>
)
}
export default App