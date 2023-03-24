

type Props = {}

export default function index({}: Props) {
  return (
    <div
    className=" flex justify-center items-center"
    style={{ width: '100%', height: '70vh' }}
  >
    <img
      src="/welcome.svg"
      alt="Admin-hello"
      className="w-2/6 h-max"
    />
  </div>
  )
}