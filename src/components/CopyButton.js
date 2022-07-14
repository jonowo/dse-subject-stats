import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { FaLink } from 'react-icons/fa';

function CopyButton() {
    const { t } = useTranslation();

    function copyURL() {
        navigator.clipboard.writeText(window.location.href);
        toast.success(t("copy.copied"));
    }

    return (
        <p>
            <Button id="copy-button" size="sm" onClick={copyURL}>
                <FaLink /> {t("copy.copyLink")}
            </Button>
        </p>
    );
}

export default CopyButton;
