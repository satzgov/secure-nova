import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

type TeamMember = {
  id: string
  name: string
  position: string
  image: string
  bio: string | null
  category: string
}

interface TeamMemberCardProps {
  member: TeamMember
  onDelete: (id: string) => void
  onEdit: (member: TeamMember) => void
}

export function TeamMemberCard({ member, onDelete, onEdit }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-muted-foreground">{member.position}</p>
        <p className="text-sm mt-2">{member.bio}</p>
        <p className="text-sm text-muted-foreground mt-2">
          Category: {member.category}
        </p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(member)}
        >
          <Pencil className="h-4 w-4" />
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => onDelete(member.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}