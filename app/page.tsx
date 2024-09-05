import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pronunciation } from '@/components/Pronunciation'
import { Fragment } from '@/components/Fragment'
import { Refresh } from '@/components/Refresh'
import { Logo } from '@/components/Logo'


function WordCard() {
  const data = [
    {
      "word": "book",
      "meaning": "书",
      "pronunciation": "/bʊk/"
    },
    {
      "word": "cat",
      "meaning": "猫",
      "pronunciation": "/kæt/"
    },
    {
      "word": "dog",
      "meaning": "狗",
      "pronunciation": "/dɔːɡ/"
    },
    {
      "word": "elephant",
      "meaning": "大象",
      "pronunciation": "/ˈɛlɪfənt/"
    }
  ]
  return (
    <Card className="flex-1">
      <CardHeader >
        <CardTitle className="flex justify-between items-center">
          本句生词
          <Refresh/>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          data.map((item, index) => {
            return (
              <div className="font-bold" key={index}>
                <Pronunciation>{item.word}</Pronunciation>
                <span className="mx-1">{item.meaning}</span>
                <Badge variant="destructive" className="rounded-md">{item.pronunciation}</Badge>
              </div>
            )
          })
        }
      </CardContent>
    </Card>
  )
}

function PhraseCard() {
  const data = [
    {
      "phrase": "piece of cake",
      "meaning": "易如反掌，小菜一碟"
    },
    {
      "phrase": "hit the nail on the head",
      "meaning": "一针见血，说中要害"
    },
    {
      "phrase": "cost an arm and a leg",
      "meaning": "价高如天，昂贵得吓人"
    },
  ]
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          本句词组
          <Refresh />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {
          data.map((item, index) => {
            return <div key={index}>
              <Pronunciation>{item.phrase}</Pronunciation>
              <p className="text-sm text-muted-foreground">{item.meaning}</p>
            </div>
          })
        }
      </CardContent>
    </Card>
  )
}

function ExampleSentence() {
  const data = [
    {
      "sentence": "The vector points in the direction of the nort",
      "meaning": "该向量指向北方。",
      words: ['vector', 'direction', 'points', 'vector', 'direction', 'points']
    },
    {
      "sentence": "The vector points in the direction of the nort",
      "meaning": "该向量指向北方。",
      words: ['vector', 'direction', 'points']
    }
  ]
  return (
    <div className="flex flex-col gap-2">
      {data.map((item, index) => {
        return <Card className="p-3 rounded-md ">
          <Pronunciation>{item.sentence}</Pronunciation>
          <p>{item.meaning}</p>
          <div className="flex gap-1 flex-wrap">
            {item.words.map(word => <Badge variant="destructive">{word}</Badge>)}
          </div>
        </Card>
      })}
    </div>
  )
}

function SentenceFragment() {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-3 pb-3 border-b-2">
      <Fragment type={1} description="什么定义了一个给定的向量">What defines a given vector</Fragment>
      <Fragment type={2} description="是它的长度">is its length</Fragment>
      <Fragment type={3} description="以及它指向的方向">and the direction it's pointing</Fragment>
      <Refresh />
    </div>
  )
}
function PostBlock() {
  return (
    <div className="pb-[130px]">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error of
        his ways and repealed the joke tax.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that
        they should pay for the privilege."
      </blockquote>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        People stopped telling jokes
      </h4>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>1st level of puns: 5 gold coins</li>
        <li>2nd level of jokes: 10 gold coins</li>
        <li>3rd level of one-liners : 20 gold coins</li>
      </ul>
    </div>
  )
}
export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 w-full h-full p-4">
      <div className="flex flex-col gap-4">
        <WordCard />
        <PhraseCard />
      </div>
      <div className="md:col-span-2">
        <ScrollArea className="h-[86vh] 2xl:w-[750px] m-auto rounded-md p-3 relative">
          <div className="flex items-start gap-4 relative">
            <Logo />
            <div>
              <div className="sticky top-0 bg-card">
                <SentenceFragment />
              </div>
              <PostBlock />
            </div>
          </div>
          <div className="absolute bottom-0 w-[96%]  h-[140px] bg-card pt-[10px]">
            <span className="absolute bottom-full h-10 inset-x-0 bg-gradient-to-b from-white/0 to-card pointer-events-none"></span>
            <Textarea placeholder="Type your message here." />
            <Button className="mt-2 w-full">Send</Button>
          </div>
        </ScrollArea>
      </div>
      <div className="flex flex-col gap-4">
        <ExampleSentence />
      </div>
    </div>
  );
}
