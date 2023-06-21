import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ToastContainer, toast } from 'react-toastify';
import ChatGPT from './Chat';
import sendMessageToChatGPT from '../../apiService/openAI.apiService';

jest.mock('react-toastify', () => ({
  ...jest.requireActual('react-toastify'),
  toast: jest.fn(),
}));

jest.mock('../../apiService/openAI.apiService', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('renders the sidebar', () => {
  it('should have sidebar section', () => {
    render(<ChatGPT />);
    const sidebar = screen.getByTestId('sidebar');
    const sidebarButton = screen.getByTestId('sidebar-button');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveClass('sideBar');
    expect(sidebar).toContainElement(sidebarButton);
    expect(sidebarButton).toHaveClass('newButton');
    expect(sidebarButton).toHaveTextContent('+ New Chat');
  });
});

describe('renders the main section', () => {
  it('should have main section with a feed, input text and submit button', () => {
    render(<ChatGPT />);
    const main = screen.getByTestId('main-section');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('main');
    const feed = screen.getByTestId('feed');
    expect(feed).toBeInTheDocument();
    expect(feed).toHaveClass('feed');
    const chatInput = screen.getByTestId('input');
    expect(chatInput).toBeInTheDocument();
    expect(chatInput).toHaveClass('chatInput');
    const submitButton = screen.getByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveClass('submitButton');
  });
});

describe('should receive a message from ChatGPT after sending a message', () => {
  it('should show a toast message if the input text is empty', () => {
    render(<ChatGPT />);
    render(<ToastContainer />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: '' } });
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    expect(toast).toHaveBeenCalled();
  });

  it('should show a toast message if the server does not respond', async () => {
    render(<ChatGPT />);
    render(<ToastContainer />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'hello' } });
    const submitButton = screen.getByTestId('submit-button');
    sendMessageToChatGPT.mockReturnValueOnce('Internal Server Error');
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith('Oops, something went wrong', {
        toastId: 'serverError',
      });
    });
  });

  it('should push message to the currentChat.messages array', async () => {
    render(<ChatGPT />);
    const input = screen.getByTestId('input');
    fireEvent.change(input, { target: { value: 'hello' } });
    const submitButton = screen.getByTestId('submit-button');
    sendMessageToChatGPT.mockReturnValueOnce({
      id: 'chatcmpl-7TtLUqcFpKY3egZq82bz6n9fAdH0u',
      object: 'chat.completion',
      created: 1687358616,
      model: 'gpt-3.5-turbo-0301',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content: 'Hello there! How can I assist you today?',
          },
          finish_reason: 'stop',
        },
      ],
      usage: {
        prompt_tokens: 9,
        completion_tokens: 10,
        total_tokens: 19,
      },
    });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByTestId('feed')).toHaveTextContent(
        'Hello there! How can I assist you today?'
      );
    });
  });
});

describe('should create a new chat', () => {
  it('should reset the title', () => {
    render(<ChatGPT />);
    const sidebarButton = screen.getByTestId('sidebar-button');
    fireEvent.click(sidebarButton);
    const chatTitle = screen.getByTestId('default-title');
    expect(chatTitle).toHaveTextContent('Smart Trip');
    const input = screen.getByTestId('input');
    expect(input).toHaveValue('');
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
  });
});
