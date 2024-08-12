import { AppRouter } from '@/trpc'
import { inferRouterOutputs } from '@trpc/server'

// type RouterOutput = inferRouterOutputs<AppRouter>

type RouterOutput = {
  getFileMessages: {
    messages: Array<{
      id: string;
      text: string;
      isUserMessage: boolean;
      createdAt: string;
      // other properties
    }>;
    nextCursor?: string | null;
  };
};

type Messages = RouterOutput['getFileMessages']['messages']

type OmitText = Omit<Messages[number], 'text'>

type ExtendedText = {
  text: string | JSX.Element
}

export type ExtendedMessage = OmitText & ExtendedText
