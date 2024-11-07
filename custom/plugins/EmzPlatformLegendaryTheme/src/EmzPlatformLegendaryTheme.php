<?php declare(strict_types=1);

namespace Emz\LegendaryTheme;

use Shopware\Core\Framework\Plugin;
use Shopware\Storefront\Framework\ThemeInterface;

class EmzPlatformLegendaryTheme extends Plugin implements ThemeInterface
{
    public function getThemeConfigPath(): string
    {
        return 'theme.json';
    }
}
