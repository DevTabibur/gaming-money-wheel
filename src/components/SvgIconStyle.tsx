interface SvgIconStyleProps {
  src: string
  color?: 'inherit' | 'action' | 'disabled' | 'paper' | string
  customStyle?: React.CSSProperties
}

const SvgIconStyle: React.FC<SvgIconStyleProps> = ({
  src,
  color = 'inherit',
  customStyle,
}) => {
  const backgroundColor =
    color === 'inherit'
      ? 'currentColor'
      : color === 'action'
        ? '#6B7280'
        : color === 'disabled'
          ? '#9CA3AF'
          : color === 'paper'
            ? '#FFFFFF'
            : color

  return (
    <span
      style={{
        width: '24px',
        height: '24px',
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        backgroundColor,
        ...customStyle,
      }}
    />
  )
}

export default SvgIconStyle
