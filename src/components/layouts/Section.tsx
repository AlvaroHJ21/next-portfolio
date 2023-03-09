import styles from './Section.module.css';

export default function Section({
    id,
    backgroundColor,
    children,
}: {
    id: string;
    backgroundColor?: string;
    children: React.ReactNode;
}) {
    return (
        <section
            id={id}
            className={styles.section}
            style={{ backgroundColor: backgroundColor ?? 'var(--foreground)' }}
        >
            <div className={styles.container}>
                {children}
            </div>
        </section>
    );
}
