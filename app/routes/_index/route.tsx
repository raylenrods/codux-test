import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getUrlOriginWithPath } from '~/utils';
import styles from './_index.module.scss';
import Button from 'react-bootstrap/Button';
import styles0 from './route.module.scss';

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

const data1 = [
    {
        id: 'stylus',
        label: 'stylus',
        value: 455,
        color: 'hsl(4, 70%, 50%)',
    },
    {
        id: 'css',
        label: 'css',
        value: 170,
        color: 'hsl(326, 70%, 50%)',
    },
    {
        id: 'elixir',
        label: 'elixir',
        value: 68,
        color: 'hsl(145, 70%, 50%)',
    },
    {
        id: 'rust',
        label: 'rust',
        value: 442,
        color: 'hsl(214, 70%, 50%)',
    },
    {
        id: 'hack',
        label: 'hack',
        value: 191,
        color: 'hsl(89, 70%, 50%)',
    },
];

export default function HomePage() {
    return (
        <div className={styles.root}>
            <h2 className={styles.title}>Welcome To App Homepage 🎉</h2>
            <Button variant="primary" className={styles0.button}>
                Test Button
            </Button>
            <span className={styles.paragraph}>
                Drag here elements from the Add Elements Panel
                <br /> and style them using the Styles panel
            </span>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
