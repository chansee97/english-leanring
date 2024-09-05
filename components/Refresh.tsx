
import { Button } from "@/components/ui/button"

interface Props {
}
export const Refresh = (props: Props) => {

  return (
    <Button variant="ghost" size="sm">
      <span className="icon-[tabler--refresh] text-sm text-muted-foreground cursor-pointer"></span>
    </Button>
  )
}