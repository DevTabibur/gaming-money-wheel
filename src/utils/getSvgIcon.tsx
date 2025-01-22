import SvgIconStyle from '@/components/SvgIconStyle'

//!=============================================================>>>
export const getIcon = (
  name: string,
  color: string = 'inherit',
  customStyle?: React.CSSProperties
) => (
  <SvgIconStyle
    // src={`/static/icons/navbar/${name}.svg`}
    src={`/assets/svg/${name}.svg`}
    color={color}
    customStyle={customStyle}
  />
)

export const ICONS = {
  mobile: getIcon('gm_mobile'),
}
